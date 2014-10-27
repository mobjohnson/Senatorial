class SearchItem < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :senators
end