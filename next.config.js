module.exports = {
    async redirects() {
        return [
            {
                source: '/:path((?!demo$))',
                has: [
                    {
                        type: 'query',
                        key: 'p',
                        value: '19',
                    },
                ],
                permanent: true,
                destination: '/demo/', // :slug
            },
        ]
    }
}