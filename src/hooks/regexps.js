export default function useRegexps() {
  function addRegexp(regexps) {
    return [...regexps, { id: regexps.length + 1, name: '', default: '' }]
  }

  function deleteRegexp(regexps, targetRegexpId) {
    return regexps.filter(regexp => regexp.id != targetRegexpId)
  }

  function updateRegexp(regexps, targetRegexp) {
    return regexps.map(regexp => {
      if (regexp.id == targetRegexp.id) regexp = targetRegexp
      return regexp
    })
  }

  return [addRegexp, deleteRegexp, updateRegexp]
}