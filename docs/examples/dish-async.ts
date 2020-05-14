import { workDuration, randomInt } from './_common';

const chanceOfStock = 80;

const work = (duration: number, chance: number = 100) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        randomInt(0, 100) < chance ? resolve() : reject();
    }, duration));
};

const fetch = async (ingredient: string): Promise<string> => {
    try {
        await work(workDuration(), chanceOfStock);
        console.log(`Fetched: ${ingredient}`);
        return ingredient;
    } catch (error) {
        console.error(`Out of stock: ${ingredient}`);
        throw Error("urk");
    }
};

const apply = async (dish: Dish, ingredient: string): Promise<Dish> => {
    await work(workDuration());
    const ingredients = [...dish.ingredients, ingredient];
    console.log(`Applied: ${ingredient}`);
    return { ...dish, ingredients };
};

export default async (): Promise<Dish> => {
    let hamburger: Dish = {
        name: "🍔 Hamburger",
        ingredients: new Array()
    };

    try {
        hamburger = await apply(hamburger, await fetch('🍞Bun'));
        hamburger = await apply(hamburger, await fetch('🥩Patty'));
        hamburger = await apply(hamburger, await fetch('🧀Chesse'));
        hamburger = await apply(hamburger, await fetch('🥓Bacon'));
        hamburger = await apply(hamburger, await fetch('🍞Bun'));
        return hamburger;
    } catch (error) {
        throw "💩 Made a turd";
    }
}