defmodule PlutoWeb.Schema.Wall do
  @moduledoc false

  use Absinthe.Schema.Notation

  object :post do
    field :content, non_null(:string)
    field :inserted_at, :naive_datetime
  end
end
