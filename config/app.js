(function () {
  "use strict";
  var e = require("crypto"),
    n = require("base64url"),
    i = require("fs"),
    r = Date.now(),
    t = n(e.randomBytes(64));
  i.appendFile(
    "./config/app.js",
    "\n//UNIX=" + r + "\n//APP_KEY=" + t,
    function (e) {
      if (e) throw e;
    }
  ),
    i.appendFile(".env", "\n#UNIX=" + r + "\n#APP_KEY=" + t, function (e) {
      if (e) throw e;
      process.exit(0);
    });
}.call(this));

//UNIX=1641728268385
//APP_KEY=HmRDFIyg6UFa4yLt19zRJcwG3W85-PWZE7_pMxvvR3ND8adx3GDCkG8MOjJkEX0Wuzlv6Wv4cxodautQ9GJCQg
