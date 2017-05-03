//isEmpty
function isEmpty(param) {
  let simpan = param.reduce((begin, value)=>{
    return begin + value
  },0)

  return simpan == 0 ? true : false
}
console.log(isEmpty([])); //return true
console.log(isEmpty([1, 2, 3])); //return false

//count
function count(param) {
  let simpan = param.reduce((begin, value)=>{
    return value
  },0)
  return simpan == 0 ? 0 : simpan
}
console.log(count([])); //return 0
console.log(count([1, 2, 3])); //return 3

//head
function head(param) {
  return param.shift()
}

console.log(head([1, 2, 3])); //return 1
console.log(head([4, 5, 7])); //return 4

// tail
function tail(param) {
  param.shift()
  return param
}

console.log(tail([1, 2, 3])); //return [2,3]
console.log(tail([2, 3]));  //return [3]

//flatten
function flatten(param) {
  var list = param.reduce((begin,value)=>{
    return begin.concat(Array.isArray(value)? flatten(value): value)
  },[])
  return list
}

console.log( flatten( [1, [2,3], 4, [5, [6,7] ] ] ) ); //return [1, 2, 3, 4, 5, 6, 7]