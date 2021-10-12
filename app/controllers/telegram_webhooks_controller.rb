class TelegramWebhooksController < Telegram::Bot::UpdatesController
  include Telegram::Bot::UpdatesController::MessageContext

  before_action :street_lookup, except: %i[start! help! register_street!]

  def street_state!(*)
    respond_with :message, text: t('.content', {
                                     street: user.street.name,
                                     occupied: user.street.occupied_slots,
                                     total: user.street.parking_slots
                                   })
  end

  def car_arrived!(*args)
    args << 1 unless args.any?
    user.street.increase_occupied_slots(args.first.to_i)
    respond_with :message, text: t('.success')
  end

  def car_left!(*args)
    args << 1 unless args.any?
    user.street.decrease_occupied_slots(args.first.to_i)
    respond_with :message, text: t('.success')
  end

  def register_street!(*args)
    return respond_with :message, text: t('.usage') unless args.any?

    street_str = args.join(' ')
    user.update(street: street(street_str))
    respond_with :message, text: t('.success')
  end

  def start!(*)
    TelegramUser.find_or_create_by(telegram_id: chat['id'])
    respond_with :message, text: t('.content')
  end

  def help!(*)
    respond_with :message, text: t('.content')
  end

  private

  def street_lookup
    respond_with :message, text: t('telegram_webhooks.street_lookup.missing_street') unless user.street.present?
  end

  def street(name)
    @street ||= Street.find_or_create_by!(name: name)
  end

  def user
    @user ||= TelegramUser.find_or_create_by!(telegram_id: telegram_id)
  end

  def telegram_id
    @telegram_id ||= chat['id']
  end

  def message(message)
    respond_with :message, text: t('.content', text: message['text'])
  end
end
