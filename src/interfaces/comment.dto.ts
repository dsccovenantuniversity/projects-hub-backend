export interface createCommentDto {
    userId: number;
    projectId: number;
    body: string;
}
export interface updateCommentByIdDto {
    commentId: number;
    body: string;
}
