//ES 5
const constructArr = function () {
    const arr = Array.prototype.slice.call(arguments)
    //['was', 'it', 'in']
    arr.push('the billiards room?')
    //['was', 'it', 'in', 'the billiards room?']
    return arr.join(" ")
     //['was', 'it', 'in', 'the billiards room?']
}

const question = constructArr('was', 'it', 'in');

console.log("ES5: ", question) //"was it in the billiards room?"

//ES 6: Array.from

const newArray = function () {
    const arr = Array.from(arguments)

    //['was', 'it', 'in']
    arr.push('the billiards room?')
    //['was', 'it', 'in', 'the billiards room?']
    return arr.join(" ")
    //['was', 'it', 'in', 'the billiards room?']
}

const q2 = newArray('was', 'it', 'in')

console.log("ES6: ", q2) //"was it in the billiards room?"


//Motivation behind turning the array-like object (arguments) into an array?
//  want access to Array methods (push and join)
