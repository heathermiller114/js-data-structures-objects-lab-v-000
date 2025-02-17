// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue (driver, key, value) {
    const newDriver = {...driver}
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey (driver, key) {
    const newDriver = {...driver};
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey (driver, k) {
    delete driver[k];
    return driver;
}
