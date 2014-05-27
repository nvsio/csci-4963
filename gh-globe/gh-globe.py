#! /usr/bin/python

import requests
import simplejson
 
json_request = requests.get('https://github.com/timeline.json')
json_content = json_request.content
json_data = simplejson.loads(json_content)
 
for item in json_data:
    print item['repository']['name']


