var cheerio = require('cheerio')
  , request = require('request')
  , $

module.exports = function(clanid) {
  return new Parser(clanid)
}

function Parser(clanid) {
  if (typeof clanid === 'number') {
    clanid = clanid.toString()
  }
  this.clanid = clanid
}

Parser.baseURL = 'http://www.ugcleague.com/team_page.cfm?clan_id='
Parser.prototype.getSID = function(cb) {
  function getHTML(err, res, body) {
    if (err) cb(err)
    $ = cheerio.load(body)
    var total = $('b').length
      , matches = []

    $('b').filter(function(index) {
      var match = this.text().match(/\d:\d:\d+/)

      if (match) matches.push(match[0])
      if (index === total-1) cb(null, matches)
    })
  }
  request(Parser.baseURL + this.clanid, getHTML)
}