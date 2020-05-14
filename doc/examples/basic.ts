const fetch = (ingredient: string) => {
    console.log(`Fetched: ${ingredient}`);
    return ingredient;
};

const apply = (dish: Dish, ingredient: string) => {
    dish.ingredients.push(ingredient);
    console.log(`Applied: ${ingredient}`);
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

