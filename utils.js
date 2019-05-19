const loadedThemeMap = {}
let latestTheme

export function getTheme(theme) {
  if(latestTheme) {
    const head = document.head
    const latestStyle = document.querySelector(`style[data-hljs="${latestTheme}"]`)

    head.removeChild(latestStyle)
  }

  if(loadedThemeMap[theme]) {
    reloadTheme(theme)
  } else {
    require(`highlight.js/styles/${theme}.css`)
    setThemeId(theme)
  }
}

function reloadTheme(theme) {
  const style = loadedThemeMap[theme]
  const head = document.head
  
  head.appendChild(style)

  latestTheme = theme
}

function setThemeId(theme) {
  for(let i = 0; i < document.styleSheets.length; i++) {
    let item = document.styleSheets.item(i)
    
    if(item.rules[0] && item.rules[0].selectorText) {
      if(item.rules[0].selectorText.match('.hljs')) {
        let hljsStyle = item.ownerNode

        hljsStyle.dataset['hljs'] = theme
        loadedThemeMap[theme] = hljsStyle
        latestTheme = theme
      }
    }
  }
}