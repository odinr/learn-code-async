import { workDuration, work } from './_common';

const chanceOfStock = 90;

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

const apply = async (ingredient: string): Promise<string> => {
    await work(workDuration());
    console.log(`Applied: ${ingredient}`);
    return ingredient;
};


async function* make(ingredients: Array<string>){
    for(const ingredient of ingredients){
        const fetched = await fetch(ingredient);
        const applied = await apply(fetched);
        yield applied
    }
};

export default async (): Promise<Dish> => {

    const ingredients = ['🍞 Bun', '🥩 Patty', '🧀 Chesse', '🥓 Bacon', '🍞 Bun'];
    const dish = {
        name: "🍔 Hamburger",
        ingredients: new Array()
    }

    try{
        for await(const ingredient of make(ingredients)){
            dish.ingredients.push(ingredient);
        }
        return dish;
    } catch(error){
        throw "💩 Made a turd";
    }
}

