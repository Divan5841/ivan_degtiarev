#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SOURCE_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
SOURCE_SHA="$(git rev-parse --short HEAD)"

if [[ "$SOURCE_BRANCH" != "main" ]]; then
  echo "Warning: not on main (currently on $SOURCE_BRANCH)."
fi

echo "→ Building production bundle..."
npm run build:prod

WORKTREE="$(mktemp -d)"
trap 'git worktree remove --force "$WORKTREE" 2>/dev/null || rm -rf "$WORKTREE"' EXIT

echo "→ Updating build branch from $SOURCE_BRANCH @ $SOURCE_SHA..."
git worktree add "$WORKTREE" build

rm -rf "$WORKTREE/index.html" "$WORKTREE/js" "$WORKTREE/css"
cp -R build/. "$WORKTREE/"

cd "$WORKTREE"
git add index.html js css

if git diff --staged --quiet; then
  echo "No changes to deploy."
else
  git commit -m "deploy from $SOURCE_BRANCH @ $SOURCE_SHA"
  echo "Created deploy commit on build branch (not pushed)."
fi

cd "$ROOT"

echo ""
echo "Done. Review:"
echo "  git log build -1"
echo "  git ls-tree --name-only build"
echo ""
echo "When ready to publish:"
echo "  git push origin build"
