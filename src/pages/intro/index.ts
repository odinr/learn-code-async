const basePath = 'intro'

export const routes: Route[] = [
    {
        path: `/${basePath}/async-not-multithread`,
        render: async () => (await import('./async-not-multithread')).render
    },
    {
        path: `/${basePath}/lifecycle`,
        render: async () => (await import('./lifecycle')).render
    },
    {
        path: `/${basePath}/tick`,
        render: async () => (await import('./tick')).render
    },
    {
        path: `/${basePath}/tick-example`,
        render: async () => (await import('./tick/tick-example')).render
    },
    {
        path: `/${basePath}/topic`,
        render: async () => (await import('./topic')).render
    },
];

export default routes;