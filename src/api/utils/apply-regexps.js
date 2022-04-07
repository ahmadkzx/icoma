export default function applyRegexps(config, icon) {
  let iconSvg = icon.svg
  const regexps = [...config.regexps, ...icon.regexps]

  regexps.forEach((regexp) => {
    iconSvg = iconSvg.replace(new RegExp(regexp.expression, 'g'), regexp.value)
  })

  return iconSvg
}
