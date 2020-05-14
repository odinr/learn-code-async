const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * max - min) + min;
}

const workDuration = () => randomInt(100, 500);

const fetch = (ingredient: string): string => {
    return setTimeout(() => {
        console.log(`Fetched: ${ingredient}`);
        return ingredient;
    }, workDuration()) as unknown as string;
};

const apply = (dish: Dish, ingredient: string) => {
    setTimeout(() => {
        dish.ingredients.push(ingredient);
        console.log(`Applied: ${ingredient}`);
    }, workDuration());
};

export default (): Dish => {
    const hamburger: Dish = {
        name: "🍔 Hamburger",
        ingredients: new Array()
    };
    apply(hamburger, fetch('🍞Bun'));
    apply(hamburger, fetch('🥩Patty'));
    apply(hamburger, fetch('🧀Chesse'));
    apply(hamburger, fetch('🥓Bacon'));
    apply(hamburger, fetch('🍞Bun'));

    return hamburger;
}

