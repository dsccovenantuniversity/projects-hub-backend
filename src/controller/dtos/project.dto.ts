import { projectStatus } from '@prisma/client';

export interface createProjectDto {
    user_id: number;
    title: string;
    description: string;
    status: projectStatus;
    image_links: string[];
    github_link?: string;
    live_link?: string;
    tags: string[];
    accepting_collaborators: boolean;
}
