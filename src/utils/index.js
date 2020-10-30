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
  total_total: "All",
  total_brand: "Brand",
  total_non_brand: "Non Brand",
  total_brand_share: "Brand / All",
  total_non_brand_share: "Non Brand / All",
  yandex_total: "Yandex",
  yandex_brand: "Yandex Brand",
  yandex_non_brand: "Yandex Non Brand",
  yandex_brand_share: "Yandex Brand / All Yandex",
  yandex_non_brand_share: "Yandex Non Brand / All Yandex",
  google_total: "Google",
  google_brand: "Google Brand",
  google_non_brand: "Google Non Brand",
  google_brand_share: "Google Brand / All Google",
  google_non_brand_share: "Google Non Brand / All Google",
}
