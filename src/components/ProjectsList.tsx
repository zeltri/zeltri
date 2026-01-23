import { h } from 'preact';
import { useState, useMemo } from 'preact/hooks';
import { projects, type Project } from '../data/projects';

interface ProjectsListProps {
    initialCount?: number;
    incrementCount?: number;
}

const ProjectsList = (props: ProjectsListProps) => {
    const { initialCount = 3, incrementCount = 6 } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const filteredProjects = useMemo(() => {
        if (!searchQuery.trim()) return projects;

        const query = searchQuery.toLowerCase();
        return projects.filter((project) => {
            const matchesName = project.name.toLowerCase().includes(query);
            const matchesDescription = project.description.toLowerCase().includes(query);
            const matchesTags = project.tags?.some((tag) =>
                tag.toLowerCase().includes(query)
            );
            return matchesName || matchesDescription || matchesTags;
        });
    }, [searchQuery]);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMoreProjects = filteredProjects.length > visibleCount;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + incrementCount);
    };

    return (
        <div class="w-full">
            {/* Search Bar */}
            <div class="mb-12">
                <input
                    type="text"
                    placeholder="Buscar proyectos por nombre, descripción o etiquetas..."
                    value={searchQuery}
                    onInput={(e: Event) => setSearchQuery((e.target as HTMLInputElement).value)}
                    class="w-full px-6 py-4 rounded-lg bg-surface-elevated border border-border-subtle text-text-primary focus:border-primary-500 transition-colors"
                />
            </div>

            {/* Projects Grid */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {visibleProjects.map((project) => (
                    <a
                        key={project.id}
                        href={`/${project.slug}`}
                        class="group block p-6 rounded-lg bg-surface-elevated border border-border-subtle hover:border-primary-500 hover:bg-card-hover-bg transition-all duration-200"
                    >
                        <h3 class="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-400 transition-colors">
                            {project.name}
                        </h3>
                        <p class="text-sm text-text-secondary mb-4">{project.description}</p>

                        {/* Tags and Status */}
                        <div class="flex flex-wrap gap-2 items-start">
                            {project.status && (
                                <span
                                    style={{
                                        backgroundColor:
                                            project.status === 'active'
                                                ? 'rgba(34, 197, 94, 0.2)'
                                                : project.status === 'maintenance'
                                                    ? 'rgba(234, 179, 8, 0.2)'
                                                    : 'var(--color-border-subtle)',
                                        color:
                                            project.status === 'active'
                                                ? '#22c55e'
                                                : project.status === 'maintenance'
                                                    ? '#eab308'
                                                    : 'var(--color-text-secondary)',
                                    }}
                                    class="text-xs px-3 py-1 rounded font-medium"
                                >
                                    {project.status === 'active'
                                        ? 'Activo'
                                        : project.status === 'maintenance'
                                            ? 'Mantenimiento'
                                            : 'Archivado'}
                                </span>
                            )}
                            {project.tags?.slice(0, 2).map((tag) => (
                                <span
                                    key={tag}
                                    class="text-xs px-3 py-1 rounded bg-primary-950 text-primary-200"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags && project.tags.length > 2 && (
                                <span class="text-xs text-text-tertiary">+{project.tags.length - 2}</span>
                            )}
                        </div>
                    </a>
                ))}
            </div>

            {/* Load More Button */}
            {hasMoreProjects && (
                <div class="flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        class="px-8 py-3 rounded-lg bg-primary-500 text-text-on-accent font-medium hover:bg-primary-600 transition-colors"
                    >
                        Ver más proyectos
                    </button>
                </div>
            )}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div class="text-center py-12">
                    <p class="text-text-secondary mb-4">No se encontraron proyectos</p>
                    <p class="text-text-tertiary text-sm">
                        Intenta con otras palabras clave
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProjectsList;
