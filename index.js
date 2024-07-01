// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber <= 42) {
        return 42 - streetNumber
    }
    return streetNumber - 42;
  }

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start <= end) {
        return (end - start) * 264
    }
    return (start - end) * 264
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end)
    console.log(feet)
    if (feet <= 400) {
        return 0
    }
    else if (feet >= 400 && feet <= 2000) {
        return (feet - 400) * 0.02
    }
    else if (feet >= 2000 && feet <=2500) {
        return 25
    }
    else if (feet >= 2500) {
        return "cannot travel that far"
    }
    
}