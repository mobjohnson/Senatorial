require "rails_helper"

RSpec.describe SearchItemsController, :type => :controller do
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
    end
  end

end

