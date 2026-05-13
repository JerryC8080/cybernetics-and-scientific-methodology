# 控制论与科学方法论

这是从 MOBI 文件整理出来的 mdBook 版本，目录和文件名使用英文，正文保留中文。

## 本地阅读

```bash
mdbook serve
```

如果默认的 `3000` 端口被占用，可以换一个端口：

```bash
mdbook serve -p 3001
```

## 构建静态 HTML

```bash
mdbook build
```

构建产物会输出到 `docs/`。如果要使用 GitHub Pages，可以在仓库设置中选择 `Deploy from a branch`，目录选择 `/docs`。

为避免 GitHub Pages 按 Jekyll 处理静态文件，构建后建议保留 `.nojekyll`：

```bash
mdbook build
touch docs/.nojekyll
```
