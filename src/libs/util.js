let util = {

}
util.title = function (title) {
  title = title || 'vue project'
  window.document.title = title
}
util.toDefultPage = function (routers, name, route, next) {
  next()
}
util.oneOf = function (ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true
  } else {
    return false
  }
}
export default util
