// Your code here
const mapToNegativize = (sourceArray) => {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(-1 * sourceArray[i])
    }
    return newArray
}

const mapToNoChange = (sourceArray) => {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

const mapToDouble = (sourceArray) => {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

const mapToSquare = (sourceArray) => {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

const reduceToTotal = (sourceArray, initialValue=0) => {
    let total = initialValue
    for (let i=0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }

    return total
}

const reduceToAllTrue = (sourceArray) => {
    for (let i=0; i < sourceArray.length; i++ ) {
        if (Boolean(sourceArray[i]) === false)
        return false
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for (let i=0; i < sourceArray.length; i++ ) {
        if (Boolean(sourceArray[i]) === true)
        return true
    }
    return false
}


