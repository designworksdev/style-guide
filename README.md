# Designworks Contribution Guidelines

## Source control

Most projects at Designworks will be using the `git` source version control. You
should have a rudimentary understanding of `git` before working on projects.

### Git commits

Commit messages and comments should be *one short line* followed by *further
explanation in a separate paragraph*.

This is correct:

    Style changes to the main slider

    Made the border red, and the background blue. Beautiful. Also tweaked some
    settings in magical jquery plugins.

Do not:

    Some really long commit message all on one line that is not concise and to the point.

Commit messages, at a glance, should let others know exactly what changes you
have made in that commit.


## Code style

### PHP

See the PSR-2 style guide http://www.php-fig.org/psr/psr-2/

Use PHP CodeSniffer (`phpcs`) with the PSR-2 standard:

    $ phpcs --standard=PSR2 file.php


### JavaScript

All JavaScript should pass our custom `jscs` and `jshint` checks. See `git
pre-commit hook` for how to install these checks.


### CSS

All CSS should pass `csslint`. (http://csslint.net/). There is a command line
utility for this tool.

In addition indentation should be 4 spaces per level, with a single property per
line:

    .class-name {
        background-color: white;
        border: 1px solid black;
    }


### git pre-commit hook

The provided `package.json` can be copied and modified to any git project,
installed with `npm install` then used to check all commits for correct style.
This will install a `pre-commit` hook into `.git/hooks/` that checks all changed
files for correct syntax and style.
