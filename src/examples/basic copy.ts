import { recipe, Instructure } from './recipe';

export const ingredients = [...new Set(recipe.map(step => step.ingredient))];

const fetch = (ingredient: string) => ingredient;

const execute = (step: Instructure) => {
    console.log(step.description, "ingredient:", step.ingredient);
    const fetched = fetch(step.ingredient);
    console.log(`Fetched: ${fetched}`);
    return step.ingredient;
}

export const make = () => {
    const sandwich = recipe.map(execute);
    console.log("Made a hamburger", "ingredients:", ...sandwich);
    return "🍔";
}