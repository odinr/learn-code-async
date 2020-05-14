const basePath = 'promises'

export const routes: Route[] = [
    {
        path: `/${basePath}`,
        render: async () => (await import('./promises')).render
    },
    {
        path: `/${basePath}/all`,
        render: async () => (await import('./promise-all')).render
    },
    {
        path: `/${basePath}/race`,
        render: async () => (await import('./promise-race')).render
    },
    {
        path: `/${basePath}/dish`,
        render: async () => (await import('./promise-dish')).render
    },
    {
        path: `/${basePath}/hell`,
        render: async () => (await import('./promise-hell')).render
    },
];

export default routes;