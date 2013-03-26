module.exports = polar
module.exports.basic = basic

var phase = 0
var v2, s
function polar() {
  var u1, u2, v1, result
  if (phase == 1) {
    result = v2 * Math.sqrt(-2 * Math.log(s) / s)
  }
  else {
    do {
      u1 = Math.random()
      u2 = Math.random()
      v1 = 2 * u1 - 1
      v2 = 2 * u2 - 1
      s = v1 * v1 + v2 * v2
    } while (s>=1 || s==0)
    result = v1 * Math.sqrt(-2 * Math.log(s) / s)
  }
  phase = 1 - phase
  return result
}


function basic() {
  var u = Math.random()
  var v = Math.random()
  return Math.sqrt(-2*Math.log(u)) * Math.cos(2*Math.PI*v)
}
