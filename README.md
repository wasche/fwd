fwd
===

`fwd` is a url shortener that uses 'pretty' names. It is best suited and geared
toward use in intranets, but public installations are possible with minor
changes for simple authentication.

Unlink most url shorteners, `fwd` allows you to pick the alias, giving you
complete control over the shortened url. This allows creation of easily
rememberable urls that can be embedded in presentations, emails, notices, or
communicated verbally.

Forwards are persistent, and will never time out or disappear unless explicitly
deleted.

Installation
---

Installation is as easy as cloning:

```
git clone git://github.com/kurakin/fwd.git
```

Copy `config-sample.json` to `config.json`, set your mongodb connection string,
and start the app!

```
./run.sh
```
