defmodule PlutoWeb.Schema.Replies do
  @moduledoc false

  use Absinthe.Schema.Notation

  object :comment_query do
    field :comments, list_of(:post) do
      resolve(fn _, _ -> {:ok, []} end)
    end
  end
end
