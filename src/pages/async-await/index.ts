const basePath = 'async-await'

export const routes: Route[] = [
    {
        path: `/${basePath}`,
        render: async () => (await import('./async-await')).render
    },
    {
        path: `/${basePath}/dish`,
        render: async () => (await import('./async-dish')).render
    },
    {
        path: `/${basePath}/dish-refactor`,
        render: async () => (await import('./async-dish-refactor')).render
    },
    {
        path: `/${basePath}/stream`,
        render: async () => (await import('./stream-dish')).render
    },
];

export default routes;