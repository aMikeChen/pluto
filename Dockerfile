FROM elixir:1.11.4-alpine as dev
ENV HEX_HTTP_TIMEOUT=1200

WORKDIR /app

COPY mix.exs mix.lock /app/

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix do deps.get, deps.compile

CMD mix phx.server

FROM elixir:1.11.4-alpine as build
ARG DATABASE_URL
ARG SECRET_KEY_BASE
ENV DATABASE_URL=$DATABASE_URL
ENV SECRET_KEY_BASE=$SECRET_KEY_BASE

RUN apk add --no-cache build-base git

WORKDIR /app

RUN mix local.hex --force
RUN mix local.rebar --force

ENV MIX_ENV=prod

COPY mix.exs mix.lock ./
COPY config config
RUN mix do deps.get, deps.compile

COPY lib lib
RUN mix do compile, release

FROM alpine:3.9 AS prod
RUN apk add --no-cache openssl ncurses-libs

WORKDIR /app

RUN chown nobody:nobody /app

USER nobody:nobody

COPY --from=build --chown=nobody:nobody /app/_build/prod/rel/pluto ./

ENV HOME=/app

CMD ["bin/pluto", "start"]
