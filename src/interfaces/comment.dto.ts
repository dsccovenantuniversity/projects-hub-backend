export interface createCommentDto {
    userId: number;
    body: string;
}
export interface updateCommentByIdDto {
    commentId: number;
    body: string;
}
