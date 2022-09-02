const flatten = function(arr) {
    return arr.reduce((pre, cur) => Array.isArray(cur) ? pre.concat(flatten(cur)) : pre.concat(cur), [])
}

module.exports = flatten;