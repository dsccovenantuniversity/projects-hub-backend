import { projectStatus } from '@prisma/client';
import { prisma } from '../config/prisma';
import { createProjectDto } from './dtos/project.dto';
//Note that when using this, import projectStatus type or interface for status as it is an enum
export const createProject = async (projectData: createProjectDto) => {
    try {
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
                    create: projectData.tags.map((tag) => ({ name: tag })),
                },
            },
        });
        console.log([project, 'project added successfully']);
    } catch (error) {
        console.log(error);
    }
};
// **** these may be transferred to a different module (tags)
export const getProgectByTag = async()=>{
    
}
export const updateProjectTag = async()=>{

}
export const deleteProjectTag = async()=>{

}
// ****
export const getProgectById = async()=>{

}
export const getProjectByUser = async()=>{

}
createProject({
    user_id: 28,
    title: "ProjectHub",
    description: "my next gdsc project",
    status: projectStatus.NOT_STARTED,
    image_links: ["this new one", "that present one", "we should get another one"],
    tags: ["frontend", "javascript"],
    accepting_collaborators: true
});
