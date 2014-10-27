class Senator < ActiveRecord::Base
  has_and_belongs_to_many :search_items
end