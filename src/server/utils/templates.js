export function vueTemplate(icon) {
  const propsString = icon.props(prop => {
    return `${prop.name}: { default: ${prop.default} },`
  })

  return (
    `<template>
      <svg :width="size" :height="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        ${icon.path}
      </svg>
    </template>

    <script>
      export default {
        name: '${icon.name}',

        props: {
          ${propsString}
        }
      }
    </script>`
  )
}