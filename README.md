Scrapes UGC team page for all team member's steam ids

```js
npm install ugc-roster-scraper
```

```js
var ugc = require('ugc-roster-scraper')
//e.g. http://www.ugcleague.com/team_page.cfm?clan_id=5965

ugc.getSID(5965, function(err, res) {
  if (err) console.log(err)
  console.log(res) //returns an array of steamid strings
})
```