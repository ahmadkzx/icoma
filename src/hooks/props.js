export default function useProps() {
  function addProp(props) {
    return [...props, { id: props.length + 1, name: '', default: '' }]
  }

  function deleteProp(props, targetPropId) {
    return props.filter(prop => prop.id != targetPropId)
  }

  function updateProp(props, targetProp) {
    return props.map(prop => {
      if (prop.id == targetProp.id) prop = targetProp
      return prop
    })
  }

  return [addProp, deleteProp, updateProp]
}