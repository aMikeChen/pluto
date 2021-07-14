#!/bin/sh

echo "waiting for $CYPRESS_API_URL/health"
yarn run -s wait-on -t 300000 $CYPRESS_API_URL/health
echo "waiting for $CYPRESS_BASE_URL"
yarn run -s wait-on -t 300000 $CYPRESS_BASE_URL
echo "All up"

exec ${@}
