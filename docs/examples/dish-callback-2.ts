import { workDuration } from './_common';

const fetch = (ingredient: string, cb: (v: string) => void) => {
    setTimeout(() => {
        console.log(`Fetched: ${ingredient}`);
        cb(ingredient);
    }, workDuration());
};

const apply = (dish: Dish, ingredient: string, cb: (v: Dish) => void) => {
    setTimeout(() => {
        console.log(`Applied: ${ingredient}`);
        cb({...dish, ingredients: [...dish.ingredients, ingredient]});
    }, workDuration());
};

export default (done: (dish: Dish) => void) => {
    const hamburger: Dish = {
        name: "🍔 Hamburger",
        ingredients: new Array()
    };
    fetch('🍞Bun', (ingredient) => {
        apply(hamburger, ingredient, (hamburger) => {
            fetch('🥩Patty', (ingredient) => {
                apply(hamburger, ingredient, (hamburger) => {
                    fetch('🧀Chesse', (ingredient) => {
                        apply(hamburger, ingredient, (hamburger) => {
                            fetch('🥓Bacon', (ingredient) => {
                                apply(hamburger, ingredient, (hamburger) => {
                                    fetch('🍞Bun', (ingredient) => {
                                        apply(hamburger, ingredient, (hamburger) => {
                                            done(hamburger);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

