class Street < ApplicationRecord
  attribute :occupied_slots, :integer, default: 0
  attribute :parking_slots, :integer, default: 10

  def increase_occupied_slots(new_slots = 1)
    new_slots = parking_slots - occupied_slots unless occupied_slots + new_slots <= parking_slots
    update(occupied_slots: occupied_slots + new_slots)
  end

  def decrease_occupied_slots(new_slots = 1)
    new_slots = occupied_slots unless (occupied_slots - new_slots).positive?
    update(occupied_slots: occupied_slots - new_slots)
  end
end

# == Schema Information
#
# Table name: streets
#
#  id             :bigint           not null, primary key
#  parking_slots  :integer
#  occupied_slots :integer
#  name           :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
