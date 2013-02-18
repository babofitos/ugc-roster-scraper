Scrapes UGC team page for all team member's steam ids

```js
npm install ugc-roster-scraper
```

```js
var ugc = require('ugc-roster-scraper')

ugc.getSID(function(err, res) {
  if (err) console.log(err)
  console.log(res) //returns an array of steamid strings
})
```