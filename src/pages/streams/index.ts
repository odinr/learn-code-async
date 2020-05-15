const basePath = 'stream'

export const routes: Route[] = [
    {
        path: `/${basePath}`,
        render: async () => (await import('./intro')).render
    },
    {
        path: `/${basePath}/dish`,
        render: async () => (await import('./stream-dish')).render
    },
];

export default routes;