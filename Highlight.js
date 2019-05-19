import { Component } from 'vue'
import hljs from 'highlight.js/lib/highlight'
import { getTheme } from './utils'

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

  watch: {
    theme() {
      getTheme(this.theme)
    }
  },

  render(h) {
    const language = this.$props.language
    const children = []
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
    hljs.highlightBlock(this.$el.querySelector('code'))
    getTheme(this.theme)
  }
}

export default HighlightVue
