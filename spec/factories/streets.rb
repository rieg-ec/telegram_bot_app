FactoryBot.define do
  factory :street do
    parking_slots { 10 }
    occupied_slots { 0 }
    name { 'MyString' }
  end

  trait :with_all_slots_occupied do
    after(:create) do |street|
      street.occupied_slots = stree.parking_slots
    end
  end
end
