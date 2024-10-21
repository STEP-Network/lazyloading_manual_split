# File setup explained
## Pre-script.js
This code handles several things in our wrapper. It's initialized before the wrapper starts up. But for this lazy loading use case it handles the the logic that splits the traffic using a random math floor, mapped out to 100 in total.  
E.g. the split is 20 / 20 / 20 / 20 / 20 = 100%


## Lazyload.js 
This file has all the configuration params to our lazy loading setup as returns the values in our wrapper. All render values increase by margins of 10.  
setup1 = controll value, setup2 = 10 margin, setup3 = 20 margin, setup4 = 30 margin, setup5 = 40 margin.

## html_unit.html
This is used to apply the key-values, based on the assigned split using the setTargeting() function. Also applies console logging for easier debugging on the client.
