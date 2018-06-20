let util = {

}
util.title = function (title) {
  title = title || 'vue project'
  window.document.title = title
}
util.toDefultPage = function (routers, name, route, next) {
  next()
}
export default util
