export interface iAuthor {
    personal_name: string;
    fuller_name: string;
    birth_date: string;
    bio: iAuthorBio;
    photos: number[];
}

interface iAuthorBio {
    value: string;
}