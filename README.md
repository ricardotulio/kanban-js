# Kanban.js

JavaScript library to calculate Kanban metrics

# How to use

First, install it:

```
npm install kanban-js
```

# Import

Import like usual

```js
import kanban from 'kanban-js'
```

also work using `require`:

```js
const kanban = require('kanban-js')
```

# Generating metrics

Generating `lead time`, `cycle time`, `reaction time` and `cumulative flow diagram data`:

```js
const stories = [
  {
    "created": "2017-03-01", 
    "started": "2017-03-03",
    "finished": "2017-03-11"
  },
  {
    "created": "2017-03-07", 
    "started": "2017-03-12",
    "finished": "2017-03-17"
  },
  {
    "created": "2017-03-10", 
    "started": "2017-03-12",
    "finished": "2017-03-16"
  }
]

const metrics = kanban.metrics(stories)

// metrics: 
//  {
//    leadtime: '8.67', 
//    cycletime: '5.67',
//    cfd: {}
//  }
```

# Building

To build the library, use `npm run build`. The build is produced in dist directory.

# Testing

To run the library tests, use `npm test`

# License

The General Public License 3.0 License (GPL)
