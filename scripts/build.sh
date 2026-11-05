#!/usr/bin/env bash
# Build the app into the extension package and (optionally) zip it into a .twbx.
#   scripts/build.sh            build only
#   SKILL_DIR=/path/to/tableau-data-app-authoring scripts/build.sh --package
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cp "$root"/data/*.csv "$root/tableau/Data/Datasources/"
(cd "$root/app" && node build.mjs)
if [[ "${1:-}" == "--package" ]]; then
  python3 "${SKILL_DIR:?set SKILL_DIR to the tableau-data-app-authoring skill dir}/scripts/package_twbx.py" "$root/tableau" "$root/dist/Way of the Hado.twbx"
fi
