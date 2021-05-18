defmodule PlutoWeb.Resolvers.Wall do
  import Ecto.Query

  alias Absinthe.Relay.Connection
  alias Pluto.Wall

  def posts(pagination_args, _) do
    Wall.Post
    |> order_by(desc: :inserted_at)
    |> Connection.from_query(&Pluto.Repo.all/1, pagination_args)
  end
end
