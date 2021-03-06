use Mix.Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :pluto, Pluto.Repo,
  username: "postgres",
  password: "postgres",
  database: "pluto_test#{System.get_env("MIX_TEST_PARTITION")}",
  hostname: System.get_env("DB_HOST") || "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :pluto, PlutoWeb.Endpoint,
  http: [port: 4000],
  server: true

# Print only warnings and errors during test
config :logger, level: :warn
