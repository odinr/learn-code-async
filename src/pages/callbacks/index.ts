const basePath = 'callback'

export const routes: Route[] = [
    {
        path: `/${basePath}`,
        render: async () => (await import('./callback')).render
    },
    {
        path: `/${basePath}/1`,
        render: async () => (await import('./callback_1')).render
    },
    {
        path: `/${basePath}/2`,
        render: async () => (await import('./callback_2')).render
    },
    {
        path: `/${basePath}/pyramid-of-doom`,
        render: async () => (await import('./pyramid-of-doom')).render
    },
];

export default routes;