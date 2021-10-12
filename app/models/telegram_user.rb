class TelegramUser < ApplicationRecord
  belongs_to :street, optional: true
end

# == Schema Information
#
# Table name: telegram_users
#
#  id          :bigint           not null, primary key
#  telegram_id :string
#  street_id   :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
