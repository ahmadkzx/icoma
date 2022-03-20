export default function applyRegexps(config, icon) {
  let iconSvg = icon.svg
  const regexps = [...config.regexps, ...icon.regexps]

  regexps.forEach((regexp) => {
    iconSvg.replace(new RegExp(regexp.expression), regexp.value)
  })

  return iconSvg
}
