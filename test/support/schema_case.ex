defmodule PlutoWeb.SchemaCase do
  use ExUnit.CaseTemplate

  alias Ecto.Adapters.SQL

  using do
    quote do
      # Import conveniences for testing with connections
      import Plug.Conn
      import Phoenix.ConnTest
      import Phoenix.ChannelTest
      import PlutoWeb.ChannelCase
      import PlutoWeb.ConnCase

      alias PlutoWeb.Router.Helpers, as: Routes

      # The default endpoint for testing
      @endpoint PlutoWeb.Endpoint
    end
  end

  setup tags do
    :ok = SQL.Sandbox.checkout(Pluto.Repo)

    unless tags[:async] do
      SQL.Sandbox.mode(Pluto.Repo, {:shared, self()})
    end

    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end
end