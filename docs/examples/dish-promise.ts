import { workDuration, randomInt } from './_common';

const chanceOfStock = 80;

const work = (duration: number, chance: number = 100) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        randomInt(0, 100) < chance ? resolve() : reject();
    }, duration));
};

const fetch = (ingredient: string): Promise<string> => {
    return work(workDuration(), chanceOfStock).then(() => {
        console.log(`Fetched: ${ingredient}`);
        return ingredient;
    }).catch(() => {
        console.error(`Out of stock: ${ingredient}`);
        throw Error("urk");
    })
};

const apply = (dish: Dish, ingredient: string): Promise<Dish> => {
    return work(workDuration()).then(() => {
        const ingredients = [...dish.ingredients, ingredient];
        console.log(`Applied: ${ingredient}`);
        return { ...dish, ingredients };
    });
};

export default (): Promise<Dish> => {
    const hamburger: Dish = {
        name: "🍔 Hamburger",
        ingredients: new Array()
    };
    return new Promise((resolve, reject) => {
        fetch('🍞Bun')
            .then(ingredient => apply(hamburger, ingredient)
                .then(hamburger => fetch('🥩Patty')
                    .then(ingredient => apply(hamburger, ingredient)
                        .then(hamburger => fetch('🧀Chesse')
                            .then(ingredient => apply(hamburger, ingredient)
                                .then(hamburger => fetch('🥓Bacon')
                                    .then(ingredient => apply(hamburger, ingredient)
                                        .then(hamburger => fetch('🍞Bun')
                                            .then(ingredient => apply(hamburger, ingredient)
                                                .then(resolve)
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ).catch(() => reject("💩 Made a turd"))
    })
}

