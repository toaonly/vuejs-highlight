import languages from './languages'

const loadedThemeMap = {}
let latestTheme

export function getTheme(theme) {
  const head = document.head

  if(latestTheme) {
    const latestStyle = document.querySelector(`[data-hljs="${latestTheme}"]`)

    head.removeChild(latestStyle)
  }

  if(loadedThemeMap[theme]) {
    reloadTheme(theme)
  } else {
    const cssURL = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/${theme}.min.css`

    fetch(cssURL)
      .then(res => {
        if(res.status === 200) {
          const link = document.createElement('link')

          link.setAttribute('rel', 'stylesheet')
          link.setAttribute('type', 'text/css')
          link.setAttribute('href', cssURL)

          head.appendChild(link)

          setThemeId(link, theme)
        }
      })
      .catch(e => {
        console.warn(e.message)
      })
  }
}

export function getLanguage(language) {
  return languages[language]
}

function reloadTheme(theme) {
  const style = loadedThemeMap[theme]
  const head = document.head
  
  head.appendChild(style)

  latestTheme = theme
}

function setThemeId(link, theme) {
  link.dataset['hljs'] = theme
  loadedThemeMap[theme] = link
  latestTheme = theme
}