export interface createUserDto {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    google_provider_id: string;
    profile_image: string | 'null';
}
export interface updateUserDetailsDto {
    first_name?: string;
    last_name?: string;
    email?: string;
    username?: string;
    profile_image?: string | 'null';
}
