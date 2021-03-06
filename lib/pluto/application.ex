defmodule Pluto.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Pluto.Repo,
      # Start the Telemetry supervisor
      PlutoWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Pluto.PubSub},
      # Start the Endpoint (http/https)
      PlutoWeb.Endpoint,
      # Start a worker by calling: Pluto.Worker.start_link(arg)
      # {Pluto.Worker, arg}
      {Absinthe.Subscription, PlutoWeb.Endpoint}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Pluto.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    PlutoWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
