victory-bundlesize
==================

Small project to demonstrate victory bundle sizes.

```
npm i
npm run -s analyze
# or npm run build
```

Output
======


`npm run -s analyze`

```
victory-core: 301.6 KB (33.5%)
lodash: 159.18 KB (17.7%)
victory-chart: 127.99 KB (14.2%)
react: 57.79 KB (6.42%)
d3-shape: 56.29 KB (6.26%)
d3-scale: 32.53 KB (3.62%)
create-react-class: 27 KB (3.00%)
prop-types: 25.61 KB (2.85%)
d3-interpolate: 15.7 KB (1.74%)
d3-time-format: 15.35 KB (1.71%)
d3-array: 14.98 KB (1.67%)
d3-color: 14.53 KB (1.61%)
d3-time: 11.86 KB (1.32%)
d3-format: 11.48 KB (1.28%)
d3-collection: 5.75 KB (0.639%)
d3-ease: 5.39 KB (0.599%)
fbjs: 5.16 KB (0.573%)
d3-path: 4.3 KB (0.478%)
<self>: 7.32 KB (0.813%)
```

`npm run build`

```
> webpack -p

Hash: a72350fc7a69b2db9837
Version: webpack 3.3.0
Time: 9878ms
                     Asset     Size  Chunks                    Chunk Names
    .tmp/vendor-aac2cb1.js   393 kB       0  [emitted]  [big]  vendor
.tmp/vendor-aac2cb1.js.map  2.83 MB       0  [emitted]         vendor
 [218] dll vendor 12 bytes {0} [built]
 [270] (webpack)/buildin/global.js 808 bytes {0} [built]
 [289] (webpack)/buildin/module.js 506 bytes {0} [built]
    + 480 hidden modules
```
