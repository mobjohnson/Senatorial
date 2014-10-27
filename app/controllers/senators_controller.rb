class SenatorsController < ApplicationController

  before_action :set_senator, only: [:show, :update, :destroy]

  def index
    render json: Senator.all, status: 200
  end

  def show
    render json: @senator.to_json, status: 200
  end

  def create
    @senator = Senator.new(senator_params)
    render json: @senator.to_json, status: 200 if @senator.save
  end

  def update
    render json: @senator.to_json, status: 200 if @senator.update(senator_params)
  end

  def destroy
    render json: @senator.to_json if @senator.destroy
  end

  private

  def set_senator
    @senator = Senator.find(params[:id])
  end

  def senator_params
    parmas.require(:senator).permit(:sr_senator, :jr_senator)
  end
end