# vuejs-highlight
---

# Installation
```
npm install --save vuejs-highlight
```

# Use
```
import Vue from 'vue'
import VueHighlight from 'vuejs-highlight'

Vue.use(VueHighlight);
```

```
<Highlight language="typescript" theme="monokai">
  interface Hero {
    id: number
    name: string
  }

  const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ]
</Highlight>
```

# Language List

* javascript(js)
* typescript(ts)
* 1c
* abnf
* accesslog
* actionscript
* ada
* angelscript
* apache
* applescript
* arcade
* arduino
* armasm
* asciidoc
* aspectj
* autohotkey
* autoit
* avrasm
* awk
* axapta
* bash
* basic
* bnf
* brainfuck
* cal
* capnproto
* ceylon
* clean
* clojure-repl
* clojure
* cmake
* coffeescript
* coq
* cos
* cpp
* crmsh
* crystal
* cs
* csp
* css
* d
* dart
* delphi
* diff
* django
* dns
* dockerfile
* dos
* dsconfig
* dts
* dust
* ebnf
* elixir
* elm
* erb
* erlang-repl
* erlang
* excel
* fix
* flix
* fortran
* fsharp
* gams
* gauss
* gcode
* gherkin
* glsl
* gml
* go
* golo
* gradle
* groovy
* haml
* handlebars
* haskell
* haxe
* hsp
* htmlbars
* http
* hy
* inform7
* ini
* irpf90
* isbl
* java
* jboss-cli
* json
* julia-repl
* julia
* kotlin
* lasso
* ldif
* leaf
* less
* lisp
* livecodeserver
* livescript
* llvm
* lsl
* lua
* makefile
* markdown
* mathematica
* matlab
* maxima
* mel
* mercury
* mipsasm
* mizar
* mojolicious
* monkey
* moonscript
* n1ql
* nginx
* nimrod
* nix
* nsis
* objectivec
* ocaml
* openscad
* oxygene
* parser3
* perl
* pf
* pgsql
* php
* plaintext
* pony
* powershell
* processing
* profile
* prolog
* properties
* protobuf
* puppet
* purebasic
* python
* q
* qml
* r
* reasonml
* rib
* roboconf
* routeros
* rsl
* ruby
* ruleslanguage
* rust
* sas
* scala
* scheme
* scilab
* scss
* shell
* smali
* smalltalk
* sml
* sqf
* sql
* stan
* stata
* step21
* stylus
* subunit
* swift
* taggerscript
* tap
* tcl
* tex
* thrift
* tp
* twig
* vala
* vbnet
* vbscript-html
* vbscript
* verilog
* vhdl
* vim
* x86asm
* xl
* xml
* xquery
* yaml
* zephir

# Theme List

* gruvbox-dark
* a11y-dark
* a11y-light
* agate
* an-old-hope
* androidstudio
* arduino-light
* arta
* ascetic
* atelier-cave-dark
* atelier-cave-light
* atelier-dune-dark
* atelier-dune-light
* atelier-estuary-dark
* atelier-estuary-light
* atelier-forest-dark
* atelier-forest-light
* atelier-heath-dark
* atelier-heath-light
* atelier-lakeside-dark
* atelier-lakeside-light
* atelier-plateau-dark
* atelier-plateau-light
* atelier-savanna-dark
* atelier-savanna-light
* atelier-seaside-dark
* atelier-seaside-light
* atelier-sulphurpool-dark
* atelier-sulphurpool-light
* atom-one-dark-reasonable
* atom-one-dark
* atom-one-light
* brown-paper
* codepen-embed
* color-brewer
* darcula
* dark
* darkula
* default
* docco
* dracula
* far
* foundation
* github-gist
* github
* gml
* googlecode
* grayscale
* gruvbox-light
* hopscotch
* hybrid
* idea
* ir-black
* isbl-editor-dark
* isbl-editor-light
* kimbie.dark
* kimbie.light
* lightfair
* magula
* mono-blue
* monokai-sublime
* monokai
* nord
* obsidian
* ocean
* paraiso-dark
* paraiso-light
* pojoaque
* purebasic
* qtcreator_dark
* qtcreator_light
* railscasts
* rainbow
* routeros
* school-book
* shades-of-purple
* solarized-dark
* solarized-light
* sunburst
* tomorrow-night-blue
* tomorrow-night-bright
* tomorrow-night-eighties
* tomorrow-night
* tomorrow
* vs
* vs2015
* xcode
* xt256
* zenburn