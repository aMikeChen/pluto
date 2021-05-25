defmodule PlutoWeb.Resolvers.Wall do
  alias Absinthe.Relay.Connection
  alias Pluto.Wall

  def posts(pagination_args, _) do
    Wall.posts_query(order: :newest)
    |> Connection.from_query(&Pluto.Repo.all/1, pagination_args)
  end

  def create_post(%{input: input}, _) do
    Wall.create_post(input)
  end
end
