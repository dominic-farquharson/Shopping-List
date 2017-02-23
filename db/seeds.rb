=begin
  Seeding database with data
=end
20.times {Item.create!(name:"Food", quantity:1, description:"I need to buy this")}
