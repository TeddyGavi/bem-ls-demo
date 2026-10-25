#!/usr/bin/env bash
set -euo pipefail

git clone https://github.com/TeddyGavi/bem-ls.git /tmp/bem-ls

cd /tmp/bem-ls
go build -o /usr/local/bin/bem-ls .

cd /workspaces/"$(basename "$OLDPWD")"

# Install extension dependencies if the extension has a package.json lockfile.
if [ -f editors/vscode/package-lock.json ]; then
  cd editors/vscode
  npm ci
fi
