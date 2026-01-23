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
        name: 'Zeltri Core',
        slug: 'zeltri-core',
        description: 'Framework base para la orquestación de proyectos open source',
        status: 'active',
        tags: ['framework', 'core', 'typescript'],
    },
    {
        id: '2',
        name: 'Zeltri Docs',
        slug: 'zeltri-docs',
        description: 'Sistema de documentación centralizado con MDX y búsqueda integrada',
        status: 'active',
        tags: ['documentation', 'mdx', 'search'],
    },
    {
        id: '3',
        name: 'Zeltri CLI',
        slug: 'zeltri-cli',
        description: 'Herramienta de línea de comandos para gestionar proyectos en el ecosistema',
        status: 'active',
        tags: ['cli', 'tools', 'typescript'],
    },
    {
        id: '4',
        name: 'Zeltri Theme',
        slug: 'zeltri-theme',
        description: 'Sistema de temas y estilos compartido entre todos los proyectos',
        status: 'active',
        tags: ['design', 'tailwind', 'theming'],
    },
    {
        id: '5',
        name: 'Zeltri Analytics',
        slug: 'zeltri-analytics',
        description: 'Herramienta de análisis para monitorear el estado de los proyectos',
        status: 'maintenance',
        tags: ['analytics', 'monitoring'],
    },
    {
        id: '6',
        name: 'Zeltri Component Library',
        slug: 'zeltri-components',
        description: 'Librería de componentes reutilizables para interfaces de usuario',
        status: 'active',
        tags: ['components', 'ui', 'astro'],
    },
    {
        id: '7',
        name: 'Zeltri API',
        slug: 'zeltri-api',
        description: 'API REST para integración con el ecosistema',
        status: 'active',
        tags: ['api', 'backend', 'typescript'],
    },
    {
        id: '8',
        name: 'Zeltri Testing Utilities',
        slug: 'zeltri-testing',
        description: 'Conjunto de utilidades para testing en proyectos del ecosistema',
        status: 'active',
        tags: ['testing', 'utilities', 'vitest'],
    },
];
