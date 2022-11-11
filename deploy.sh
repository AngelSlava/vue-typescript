#!/usr/bin/env sh

set -e

npm run build
git add -A
git commit -m 'New pages deployment'
git subtree push --prefix dist origin gh-pages

