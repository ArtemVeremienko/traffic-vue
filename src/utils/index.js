export const transform = (data) => {
  const table = {}
  for (let filter in data) {
    table[filter] = []
    for (let row in data[filter]) {
      table[filter].push({
        name: row,
        ...data[filter][row]
      })
    }
  }
  return table
}
