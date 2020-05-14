export const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * max - min) + min;
}

export const chance = (c: number): boolean => randomInt(0, 100) < c;

export const workDuration = () => randomInt(100, 500);

export const work = (duration: number, chance: number = 100) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        randomInt(0, 100) < chance ? resolve() : reject();
    }, duration));
};