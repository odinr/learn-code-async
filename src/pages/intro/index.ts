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
        render: async () => (await import('./tick-example')).render
    },
    {
        path: `/${basePath}/basic`,
        render: async () => (await import('./basic')).render
    },
];

export default routes;