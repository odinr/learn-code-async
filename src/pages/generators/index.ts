const basePath = 'generators'

export const routes: Route[] = [
    {
        path: `/${basePath}`,
        render: async () => (await import('./intro')).render
    },
    {
        path: `/${basePath}/dish`,
        render: async () => (await import('./generated-dish')).render
    },
];

export default routes;