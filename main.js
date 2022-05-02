//oneThroughTwenty()

function oneThroughTwenty(num) {
    let contagem = 0
    for (let i = 1; i <= num; i++) {
        console.log(i)
        console.log('ta passando')
        contagem++
    }
    return contagem
}

//evensToTwenty()

function evensToTwenty(num) {
    let contagemPares = 0
    for (let i = 1; i <= num; i++) {
        if ([i] % 2 === 0) {
            contagemPares++
        }
    }
    return `Possui ${contagemPares} Numeros Pares`
}

//oddsToTwenty()

function oddsToTwenty(num) {
    let contagemImpares = 0
    for (let i = 1; i <= num; i++) {
        if ([i] % 2 === 1) {
            contagemImpares++
        }
    }
    return `Possui ${contagemImpares} Numeros Impares`
}

//multiplesOfFive()

function multiplesOfFive(num) {
    let contagemMultiples = 0
    for (let i = 1; i <= num; i++) {
        if ([i] % 5 === 0) {
            contagemMultiples++
        }
    }
    return `Possui ${contagemMultiples} multiplos de cinco`
}

//squareNumbers()

function squareNumbers(num) {
    let perfectSquare = []
    for (let i = 1; i <= num; i++) {
        if (Math.sqrt([i]) % 1 === 0) {
            perfectSquare.push(i)
        }


    }
    return `Os numeros ${perfectSquare.join(' - ')} são quadrados perfeitos `
}

//countingBackwards()

function countingBackwards(num) {
    let reverse = []
    for (let i = 1; i <= num; i++) {
        reverse.push(i)
    }
    return contagem = `Contagem regressiva: ${reverse.reverse().join(' ')}`
}

//evenNumbersBackwards()

function evenNumbersBackwards(num) {
    let contagemPares = []
    for (let i = 1; i <= num; i++) {
        if ([i] % 2 === 0) {
            contagemPares.push(i)
        }

    }
    return `Contagem regressiva numeros pares: ${contagemPares.reverse().join('-')}`
}

//oddNumbersBackwards()

function oddNumbersBackwards(num) {
    let contagemImpares = []
    for (let i = 1; i <= num; i++) {
        if ([i] % 2 === 1) {
            contagemImpares.push(i)
        }

    }
    return `Contagem regressiva numeros impares: ${contagemImpares.reverse().join('-')}`
}

//multiplesOfFiveBackwards()

function multiplesOfFiveBackwards(num) {
    let contagemmultiplesOf = []
    for (let i = 1; i <= num; i++) {
        if ([i] % 5 === 0) {
            contagemmultiplesOf.push(i)
        }

    }
    return `Contagem regressiva numeros multiplos de 5: ${contagemmultiplesOf.reverse().join('-')}`
}

//squareNumbersBackwards()

function squareNumbersBackwards(num) {
    let perfectSquareBackwards = []
    for (let i = 1; i <= num; i++) {
        if (Math.sqrt([i]) % 1 === 0) {
            perfectSquareBackwards.push(i)
        }


    }
    return `Contagem regressiva dos numeros : ${perfectSquareBackwards.reverse().join(' - ')} são quadrados perfeitos `
}

const oneTill = 20
const numPair = 20
const numOdd = numPair
const numMultiples = numPair
const squareNum = 100
const countingBack = numPair
const backwardsPair = numPair
const backwardsOdd = numPair
const backwardsFive = numPair
const squareNumBackwards = squareNum

const oneTillTwenty = oneThroughTwenty(oneTill)
const evensPair = evensToTwenty(numPair)
const evensOdd = oddsToTwenty(numOdd)
const multiples = multiplesOfFive(numMultiples)
const square = squareNumbers(squareNum)
const backCounting = countingBackwards(countingBack)
const numbersBackwardsPair = evenNumbersBackwards(backwardsPair)
const numbersBackwardsOdd = oddNumbersBackwards(backwardsOdd)
const numbersOfFiveBackwards = multiplesOfFiveBackwards(backwardsFive)
const numberssquareBackwards = squareNumbersBackwards(squareNumBackwards)

console.log(oneTillTwenty)
console.log(evensPair)
console.log(evensOdd)
console.log(multiples)
console.log(square)
console.log(backCounting)
console.log(numbersBackwardsPair)
console.log(numbersBackwardsOdd)
console.log(numbersOfFiveBackwards)
console.log(numberssquareBackwards)

