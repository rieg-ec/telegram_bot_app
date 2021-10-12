require 'rails_helper'

RSpec.describe Street, type: :model do
  it 'has a valid factory' do
    expect(build(:street)).to be_valid
  end
end
