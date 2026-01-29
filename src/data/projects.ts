export interface Project {
    id: string;
    name: string;
    slug: string;
    description: string;
    longDescription?: string;
    status?: 'active' | 'maintenance' | 'archived';
    tags?: string[];
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'BunnyJS',
        slug: 'bunny-js',
        description: 'Librería utilitaria de JS',
        status: 'active',
        tags: ['librery', 'typescript'],
    },
    {
        id: '2',
        name: 'CHRONO',
        slug: 'chrono-terminal',
        description: 'Emulador de terminal',
        status: 'active',
        tags: ['terminal', 'rust'],
    },
];
