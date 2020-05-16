/**
 * 转换vuetify的数据表格options为mybatis-plus的page对象
 * @param {Object} options
 */
export default function dataTableOptionsToMybatisPage (options) {
  const {
    sortBy, sortDesc, page, itemsPerPage,
  } = options
  const orderItemList = []
  if (sortBy && sortBy.length > 0) {
    sortBy.forEach((e, i) => {
      orderItemList.push({ column: e, asc: !(sortDesc.length >= i + 1) })
    })
  }
  return {
    size: itemsPerPage,
    orders: orderItemList,
    current: page,
  }
}
