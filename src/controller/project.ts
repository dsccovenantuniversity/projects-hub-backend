import { projectStatus } from '@prisma/client';
import { prisma } from '../config/prisma';
import { createProjectDto } from './dtos/project.dto';
//Note that when using this, import projectStatus type or interface for status as it is an enum
export const createProject = async (projectData: createProjectDto) => {
    try {
        const tagsToCreate = projectData.tags.map(async (tag) => {
            const existingTag = await prisma.tags.findFirst({
                where: {
                    name: tag,
                },
            });
            if (existingTag) {
                return existingTag;
            } else {
                return prisma.tags.create({
                    data: {
                        name: tag,
                    },
                });
            }
        });

        const createdTags = await Promise.all(tagsToCreate);

        const project = await prisma.projects.create({
            data: {
                user_id: projectData.user_id,
                title: projectData.title,
                description: projectData.description,
                status: projectData.status,
                image_links: projectData.image_links || ['null'],
                github_link: projectData.github_link || 'null',
                live_link: projectData.live_link || 'null',
                tags: {
                    connect: createdTags.map((tag) => ({ id: tag.id })),
                },
            },
        });
        return project;
    } catch (error) {
        console.log(error);
    }
};
// **** these may be transferred to a different module (tags)
export const getProjectByTag = async (tags: string | string[]) => {
    try {
        const tagsArray = Array.isArray(tags) ? tags : [tags];

        const projects = await prisma.projects.findMany({
            where: {
                tags: {
                    some: {
                        name: {
                            in: tagsArray,
                        },
                    },
                },
            },
        });

        return projects;
    } catch (error) {
        console.log(error);
    }
};

export const updateProjectTag = async (id: number, tags: string[]) => {
    const existingProject = await prisma.projects.findUnique({
        where: {
            id,
        },
        include: {
            tags: true,
        },
    });

    if (!existingProject) {
        throw new Error(`Project with ID ${id} not found.`);
    }

    const existingTagNames = existingProject.tags.map((tag) => tag.name);

    const tagsToAdd = tags.filter((tag) => !existingTagNames.includes(tag));
    const tagsToRemove = existingTagNames.filter((tag) => !tags.includes(tag));
};

export const deleteProjectTag = async (id: number) => {
    try {
        const existingProject = await prisma.projects.findUnique({
            where: {
                id,
            },
            include: {
                tags: true,
            },
        });

        if (!existingProject) {
            throw new Error(`Project with ID ${id} not found.`);
        }

        await prisma.projects.update({
            where: {
                id,
            },
            data: {
                tags: {
                    disconnect: existingProject.tags,
                },
            },
        });
    } catch (error) {
        console.log(error);
    }
};

// ****
export const getProjectById = async (id: number) => {
    try {
        const project = await prisma.projects.findUnique({
            where: {
                id,
            },
        });
        return project;
    } catch (error) {
        return error;
    }
};

export const getProjectByUser = async (user_id: number) => {
    try {
        const projects = await prisma.projects.findMany({
            where: {
                user_id,
            },
        });
        return projects;
    } catch (error) {
        return error;
    }
};
