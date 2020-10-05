---
template: BlogPost
path: /my-lein-profile
date: 2020-10-05T03:22:32.237Z
title: My Lein Profile Setup
metaDescription: 'profiles.clj, lein profile'
---
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
- Lein Try : sample lein packages at command line
- Lein Midje : clean Clojure testing framework
- Lein Cloverage : CI/CD of testing for Clojure
- Lein Eastwood : linting for Clojure
