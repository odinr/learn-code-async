export interface Instructure {
    description: string,
    ingredient: string
}

export type Recipe = Instructure[];

export const recipe: Recipe = [
    {
        description: "Lay down bun",
        ingredient: "🍞 bread"
    },
    {
        description: "Cook meat",
        ingredient: "🥩 meat",
    },
    {
        description: "Melt cheese",
        ingredient: "🧀 cheese",
    },
    {
        description: "Fry bacon",
        ingredient: "🥓 bacon"
    },
    {
        description: "Put bun on top",
        ingredient: "🍞 bread"
    }
]
