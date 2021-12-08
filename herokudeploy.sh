#! /bin/bash
yarn build
heroku container:push web
# heroku container:push --app=gentle-peak-42402 web
heroku container:release web

heroku logs --tail
#heroku run bash -a quiet-escarpment-5284