# Designworks Contribution Guidelines

## Code style

### PHP

See the PSR-2 style guide http://www.php-fig.org/psr/psr-2/

Use PHP CodeSniffer (`phpcs`) with the PSR-2 standard:

    $ phpcs --standard=PSR2 file.php


### Javascript

All javascript should pass `jslint` (http://jslint.com/). The additional options
used are:

* 80 maximum line length
* Assume a browser

See the included jslintrc file for use with the command line `jslint` tool.


### CSS

All CSS should pass `csslint`. (http://csslint.net/). There is a command line
utility for this tool.

In addition identation should be 4 spaces per level, with a single property per
line:

    .class-name {
        background-color: white;
        border: 1px solid black;
    }


## git pre-commit hook

If you have `phpcs` (PHP CodeSniffer), `csslint` and `jslint` installed on your
system and would like all your git commits to be checked for mishaps, install
`hooks/pre-commit` to your `.git/hooks` directory.
