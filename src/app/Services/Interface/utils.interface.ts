export interface singleWork {
    readonly key: string;
    readonly title: string;
    readonly subtitle?: string;
    readonly authors: workAuthor[];
    readonly description?: string | workDescription;
    readonly covers?: number[];
}

export interface workAuthor {
    readonly author: author;
}

export interface workDescription {
    readonly value: string;
}

export interface worksList {
    readonly numFound: number;
    readonly docs: document[];
}

export interface document {
    readonly key: string;
    readonly title: string;
    readonly author_key: string[];
    readonly author_name: string[];
    readonly cover_edition_key?: string;
    readonly cover_i?: number;
}

export interface author {
    readonly key: string;
    readonly name?: string;
    readonly personal_name?: string;
    readonly fuller_name?: string;
    readonly birth_date?: string;
    readonly death_date?: string;
    readonly bio?: string | authorBio;
    readonly photos?: number[];
}

export interface authorBio {
    readonly value: string;
}