type APP_DATA_TYPE = {
    MainContent: { tiles: { label: string, to?: string }[] }
}

export const APP_DATA: APP_DATA_TYPE = {
    MainContent: {
        tiles: [
            { label: 'Projects', to: '/projects'},
            { label: 'Skills', to: '/skills'},
            { label: 'About', to: '/about'},
            { label: 'CV'},
            { label: 'Contact', to: '/contact'},
        ]
    }
}