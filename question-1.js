// Daniel Konjaski - 101436648
// COMP3123 - Labtest 1

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input must be an array");
        } else {
            const result = arr
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(result);
        }
    });
}

const mixedArray = [10, 'Full', 3123, 'STACK', true, 'LabTest', false, 12345, 'OnE'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));