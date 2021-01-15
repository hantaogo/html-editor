export const getDropPos = function (event) {
  const container = event.target
  const rect = container.getBoundingClientRect()
  const left = event.clientX - rect.left - container.clientLeft + container.scrollLeft
  const top = event.clientY - rect.top - container.clientTop + container.scrollTop
  return {
    left,
    top
  }
}

export const getDragPos = function (event) {
  const container = event.target.parentNode
  const rect = container.getBoundingClientRect()
  const left = event.clientX - rect.left - container.clientLeft + container.scrollLeft
  const top = event.clientY - rect.top - container.clientTop + container.scrollTop
  return {
    left,
    top
  }
}
