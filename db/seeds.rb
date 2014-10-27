# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
SearchItem.create(state1: 'VA', state2: 'MD', phrase: 'Iraq', results1: 6, results2: 12)
SearchItem.create(state1: 'NC', state2: 'SC', phrase: 'Ukraine', results1: 50, results2: 99)
SearchItem.create(state1: 'NY', state2: 'FL', phrase: 'Ebola', results1: 120, results2: 240)
Senator.create(sr_senator: 'Mark Warner', jr_senator: 'Tim Kaine')
Senator.create(sr_senator: 'Richard Burr', jr_senator: 'Kay Hagan')
Senator.create(sr_senator: 'Chuck Shumer', jr_senator: 'Kirsten Gillibrand')
