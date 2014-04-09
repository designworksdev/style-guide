# Designworks Contribution Guidelines

## Code style

### PHP

See the PSR-2 style guide http://www.php-fig.org/psr/psr-2/

Use PHP CodeSniffer (`phpcs`) with the PSR-2 standard:

    $ phpcs --standard=PSR2 file.php


### Javascript

Follow the `jslint` (http://jslint.com/) style guidelines with the following
options.

* 80 maximum line length
* Assume a browser

See the included jslintrc file for use with the command line `jslint` tool.


## CSS

All CSS should pass `csslint`. (http://csslint.net/). There is a command line
utility for this tool.


## git pre-commit hook

If you have `phpcs` (PHP CodeSniffer) and `jslint` installed on your system and
would like all your git commits to be checked for mishaps, install
`hooks/pre-commit` to your `.git/hooks` directory.
