export default {
  name: 'Icom',
  icons: [],
  isFillWhite: false,
  regexps: [{
    expression: '\fill=".*"\g',
    value: 'fill="white"'
  }],
  target: 'vue',
  template: `<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {ICON.SVG}
    </svg>
  </template>

  <script>
    export default {
      name: "{ICON.NAME}",

      props: {
        size: {
          default: 24
        }
      }
    }
  </script>`
}