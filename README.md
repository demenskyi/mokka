# Mokka

Minimal dark theme for Visual Studio Code.

The idea was to create a color theme that only highlights the entities necessary for distinguishing, and doesn't complicate the code reading with unnecessary colors and highlights.

![Mokka hero](images/hero.png)
![Mokka code preview (React.js)](images/preview-code-react.png)
![Mokka color palette](images/color-palette.png)

## Recommended settings

#### Font

For a better experience, use the "[Cascadia Code](https://github.com/microsoft/cascadia-code)" or "[JetBrains Mono](https://github.com/JetBrains/JetBrainsMono)" font.

```json
"editor.fontFamily": "Cascadia Code, monospace",
"editor.fontSize": 12,
"editor.fontLigatures": true,

"terminal.integrated.fontFamily": "Cascadia Code, monospace",
"terminal.integrated.fontSize": 12,
"terminal.integrated.lineHeight": 1.2,
```

#### Icons

For a better experience, use the "[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)" icons.

```json
"workbench.iconTheme": "material-icon-theme",
"material-icon-theme.folders.theme": "classic",
"material-icon-theme.folders.color": "#666666",
"material-icon-theme.activeIconPack": "react_redux",
"material-icon-theme.hidesExplorerArrows": true,
```

#### Cursor

```json
"editor.cursorStyle": "underline",
"editor.cursorBlinking": "smooth",
"editor.cursorSmoothCaretAnimation": true,

"terminal.integrated.cursorBlinking": true,
"terminal.integrated.cursorStyle": "underline",
```

#### Interface

```json
"workbench.editor.labelFormat": "short",
"workbench.editor.showIcons": false,

"breadcrumbs.icons": false,
"breadcrumbs.filePath": "on",
"breadcrumbs.symbolPath": "on",

"editor.smoothScrolling": true,
"editor.scrollBeyondLastLine": false,
"editor.renderLineHighlight": "all",

"editor.minimap.enabled": false,
"workbench.statusBar.visible": false,
"workbench.activityBar.visible": false,

"window.titleBarStyle": "custom",
"window.title": "${dirty}${separator}${rootName}${separator}${activeEditorShort}",
```

---

Made for pleasure with love ❤️
