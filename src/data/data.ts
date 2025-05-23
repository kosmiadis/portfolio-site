type APP_DATA_TYPE = {
    MainContent: { tiles: { label: string, to?: string, col_start: number, col_end: number }[] }
}

export const APP_DATA: APP_DATA_TYPE = {
    MainContent: {
        tiles: [
            { label: 'Projects', to: '/projects', col_start: 1, col_end: 3 },
            { label: 'Skills', to: '/skills', col_start: 2, col_end: 3},
            { label: 'About', to: '/about', col_start: 1, col_end: 1},
            { label: 'CV', col_start: 2, col_end: 2 },
            { label: 'Contact', to: '/contact', col_start: 3, col_end: 3},
        ]
    }
}