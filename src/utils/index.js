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

export const rowsMap = {
  total_brand: "Google",
  total_brand_share: "Google Brand",
  total_non_brand: "Google Non Brand",
  total_non_brand_share: "Google Brand / Non Brand",
  total_total: "All",
  yandex_brand: "Yandex",
  yandex_brand_share: "Yandex Brand",
  yandex_non_brand: "Yandex Non Brand",
  yandex_non_brand_share: "Yandex Brand / Yandex Non Brand",
  yandex_total: "Yandex Brand + Yandex Non Brand",
}
