---
template: BlogPost
path: /my-lein-profile
date: 2020-10-05T03:22:32.237Z
title: My Lein Profile Setup
metaDescription: 'profiles.clj, lein profile'
---
### How I have Leiningen configured to work with Clojure

- prereq: Leiningen

## ~/.lein/profiles.clj

```clojure
{:user
 {:plugins [[lein-try "0.4.3"]
            [lein-midje "3.2.1"]
            [lein-cloverage "1.1.2"]
            [jonase/eastwood "0.3.10"]]
}}
```

### Dependencies
- [Lein Try](https://github.com/avescodes/lein-try) : Sample lein libraries at the command line, without needing to download them
- [Lein Midje](https://github.com/marick/Midje/wiki/A-tutorial-introduction) : clean Clojure testing framework
- [Lein Cloverage](https://github.com/cloverage/cloverage) : CI/CD of testing for Clojure
- [Lein Eastwood](https://github.com/jonase/eastwood) : linting for Clojure
