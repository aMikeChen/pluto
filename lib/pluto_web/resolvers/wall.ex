defmodule PlutoWeb.Resolvers.Wall do
  def posts(_, _) do
    {:ok, Pluto.Repo.all(Pluto.Wall.Post)}
  end
end
