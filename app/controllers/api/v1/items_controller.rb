# defining actions
class Api::V1::ItemsController < Api::V1::BaseController
  # index action
  def index
    respond_with Item.all
  end

  # create action
  def create
    respond_with :api, :v1, Item.create(item_params)
  end

  # destroy action
  def destroy
    respond_with Item.destroy(params[:id])
  end

  # update Action, finds by Id
  def update
    item = Item.find(params["id"])
    item.update.attributes(item_params)
    respond_with item json: item
  end

  # private
  private

  def items_params
    params.require(:item).permit(:id, :name, :description)
  end

end
