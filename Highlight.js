import { Component } from 'vue'
import hljs from 'highlight.js/lib/highlight'
import { getTheme, getLanguage } from './utils'

/**
 * @type {Component}
 */
const HighlightVue = {
  name: 'Highlight',

  props: {
    language: {
      type: String,
      required: true
    },

    theme: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    className() {
      const language = this.language
      let className

      switch(language) {
        case 'js':
          className = 'javascript'
          break
        case 'ts':
          className = 'typescript'
          break
        default:
          className = language
          break
      }

      return className
    }
  },

  watch: {
    theme() {
      this.init()
    },

    language() {
      this.init()
    }
  },

  methods: {
    init() {
      const className = this.className
      const language = getLanguage(className)
      
      getTheme(this.theme)

      hljs.registerLanguage(className, language)
      hljs.highlightBlock(this.$el.querySelector('code'))
    }
  },

  render(h) {
    const children = []
    let className = this.className

    children.push(
      h(
        'code',
        {
          class: className
        },
        [ this.$slots.default ]
      )
    )

    return h(
      'pre',
      null,
      children
    )
  },

  mounted() {
    this.init()
  }
}

export default HighlightVue
