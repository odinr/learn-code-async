import { from } from 'rxjs';
import { concatMap, tap, reduce } from 'rxjs/operators';

import { work, workDuration } from './_common';

const ingredients = ['🍞 Bun', '🥩 Patty', '🧀 Chesse', '🥓 Bacon', '🍞 Bun'];

const fetch = async (ingredient: string) => {
    await work(workDuration());
    return ingredient
};

const apply = async (ingredient: string) => {
    await work(workDuration());
    return ingredient
};

export default async () => {
    return from(ingredients).pipe(
        concatMap(ingredient => from(fetch(ingredient)).pipe(
            tap(ingredient => console.log(`Fetched: ${ingredient}`)),
            concatMap(apply),
            tap(ingredient => console.log(`Applied: ${ingredient}`)),
        )),
        reduce((hamburger, ingredient) => {
            const ingredients = [...hamburger.ingredients, ingredient];
            return { ...hamburger, ingredients };
        }, {
            name: "🍔 Hamburger",
            ingredients: []
        })
    );
}