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
];

export default routes;