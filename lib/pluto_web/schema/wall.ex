defmodule PlutoWeb.Schema.Wall do
  @moduledoc false

  use Absinthe.Schema.Notation
  use Absinthe.Relay.Schema.Notation, :modern

  alias PlutoWeb.Resolvers.Wall

  connection(node_type: :post)

  node object(:post) do
    field :content, non_null(:string)
    field :inserted_at, non_null(:naive_datetime)
  end

  input_object(:create_post_input) do
    field :content, non_null(:string)
  end

  object :wall_queries do
    connection field :list_posts, node_type: :post do
      resolve(&Wall.posts/2)
    end
  end

  object :wall_mutations do
    field :create_post, non_null(:post) do
      arg(:input, non_null(:create_post_input))

      resolve(&Wall.create_post/2)
    end
  end
end
