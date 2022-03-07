export function vueTemplate(config, icon) {
  const totalProps = [...config.props, ...icon.props]
  const propsString = totalProps.map(prop => {
    return `${prop.name}: { default: ${prop.default} },`
  })

  return (
    `<template>
      <svg :width="size" :height="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        ${icon.svg}
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