defmodule PlutoWeb.Resolvers.Replies do
  alias Pluto.{Replies, Wall}

  def comments(%Wall.Post{} = post, _, _) do
    {:ok, Replies.list_comments(post)}
  end

  def create_comment(_, _) do
    {:ok, nil}
  end
end
