# Mokka

Minimal dark theme for Visual Studio Code.

The idea was to create a color theme that highlights only those objects that are necessary for distinguishing and does not make the code difficult to read with unnecessary colors and highlights.

![Mokka thumbnail](https://raw.githubusercontent.com/demenskiy/mokka/preview/images/hero.png)
![Mokka color palette](https://raw.githubusercontent.com/demenskiy/mokka/preview/images/color-palette.png)
![Mokka code preview (React.js)](https://raw.githubusercontent.com/demenskiy/mokka/preview/images/code-preview.png)

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
"material-icon-theme.folders.color": "#505050",
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
"workbench.editor.labelFormat": "default",
"workbench.editor.showIcons": false,

"breadcrumbs.icons": false,
"breadcrumbs.filePath": "on",
"breadcrumbs.symbolPath": "on",

"editor.minimap.enabled": false,
"workbench.statusBar.visible": false,
"workbench.activityBar.visible": false,
```

---

Made for pleasure with love ❤️
