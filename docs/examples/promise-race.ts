const random = (max: number, min: number = 0) => {
    return Math.floor(Math.random() * max - min) + min;
};

const chance = (c: number): boolean => random(100) < c;

const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        chance(75) ? resolve('Promise1 resolved') : reject('Promise1 rejected');
    }, random(1000));
});
const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        chance(75) ? resolve('Promise2 resolved') : reject('Promise2 rejected');
    }, random(1000));
});

export default () => Promise.race([promise1(), promise2()])
    .then(data => {
        console.log(data);
         return "👍🏻 promise resolved";
    })
    .catch(error => {
        console.error(error);
        return "🤬 failed to deliver promise";
    });