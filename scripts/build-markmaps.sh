#!/usr/bin/env bash
# 把 markmaps/*.md 全部生成为静态 HTML 思维导图，输出到 src/assets/markmaps/
# 使用 markmap-cli（npx 自动下载，无需全局安装）
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT/markmaps"
OUT_DIR="$ROOT/src/assets/markmaps"

mkdir -p "$OUT_DIR"

echo "==> Building markmaps from $SRC_DIR -> $OUT_DIR"
for md in "$SRC_DIR"/*.md; do
  name="$(basename "$md" .md)"
  out="$OUT_DIR/$name.html"
  echo "    - $name.md -> $name.html"
  npx --yes markmap-cli@latest "$md" --no-open -o "$out" >/dev/null 2>&1
done

echo "==> Done. Generated files:"
ls -1 "$OUT_DIR"
