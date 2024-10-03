// Daniel Konjaski - 101436648
// COMP3123 - Labtest 1

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'Resloved after delay of 500ms' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            reject({ error: 'Rejected after delay of 500ms' });
        }, 500);
    });
};

resolvedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));

rejectedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));