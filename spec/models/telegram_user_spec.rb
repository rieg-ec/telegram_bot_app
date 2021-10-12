require 'rails_helper'

RSpec.describe TelegramUser, type: :model do
  it 'has a valid factory' do
    expect(build(:telegram_user)).to be_valid
  end
end
