@app
enhance-arc-app

@static
fingerprint true
prune true

@http
get /api

# @events
# do-work

# @scheduled
# update rate(1 minute)

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance

@tables
things
  thingID *String

@tables-indexes
things
  type *String
  name thingsByType

@aws
# region us-east-1
runtime nodejs20.x
architecture arm64
