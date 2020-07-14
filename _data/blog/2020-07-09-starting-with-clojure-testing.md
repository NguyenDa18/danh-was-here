---
template: BlogPost
path: /starting-with-clojure-testing
date: 2020-02-26T23:30:36.729Z
title: Starting with Clojure Testing
metaDescription: The quickest way to get started with clj-test for Clojure testing
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1580102789/blog/personal/chalk-categories_skrzdb.jpg
---
* Prereq Leiningen

I have to admit, I was a little stubborn towards Clojure when I first started working with it for my job. What sold me was how easy it was to create a sandbox with bundled testing so you can test your functions in peace (haven't gotten a spark for REPL driven development yet). Here is how I would convince someone to be a little friendlier towards Clojure -testing with clj-test has been quite enjoyable!

Enter in the command line:
1. `lein new <project-name>` : this will use the default project template from lein that includes a whole test setup with clj-test
2. `cd` into that directory and run `lein test` -you will get an error on purpose. Sounds like a case for TDD (Test Driven Development)!

Result:
```clojure
lein test tester.core-test

lein test :only tester.core-test/a-test

FAIL in (a-test) (core_test.clj:7)
FIXME, I fail.
expected: (= 0 1)
  actual: (not (= 0 1))
```
3. Fix the test! You'll just need to make a change in src/core.clj.
4. The fun part will be adding more organized code and their respective unit tests. This will just be a review of how to import namespaces so you can access appropriate code in the unit tests you'll write. The structure goes:
5. With every new subfolder in the src code folder, define namespaces as:
`(ns <app-name>.<folder name>.<filename>)`
e.g. `(ns clj-testing.utils.numbers)` : created a utils folder in src and a file numbers.clj
6. Import that namespace and add an appropriate unit test:
```clojure
(ns clj-testing.utils.numbers-test
(:require [clojure.test :refer :all]
          [clj-testing.util.numbers :as num]))

(deftest test-parseInt
  (testing "Parses string to int"
    (is (= -24 (num/parse-int "-24")))))
```
