defmodule PlutoWeb.Router do
  use PlutoWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api" do
    pipe_through :api

    if Mix.env() == :dev do
      forward "/graphiql", Absinthe.Plug.GraphiQL,
        schema: PlutoWeb.Schema,
        socket: PlutoWeb.UserSocket
    end

    forward "/", Absinthe.Plug, schema: PlutoWeb.Schema
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: PlutoWeb.Telemetry, ecto_repos: [Pluto.Repo]
    end

    forward("/e2e", Pluto.Plug.TestEndToEnd)
  end
end
