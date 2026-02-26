// Interface d'un ouvrage
export interface singleWork {
    readonly key: string;
    readonly title: string;
    readonly subtitle?: string;
    readonly authors: workAuthor[];
    readonly description?: string | workDescription;
    readonly covers?: number[];
}

// Interface d'un auteur d'ouvrage
export interface workAuthor {
    readonly author: author;
}

// Interface d'une description d'ouvrage
export interface workDescription {
    readonly value: string;
}

// Interface d'une liste d'ouvrage résultante d'une recherche
export interface worksList {
    readonly numFound: number;
    readonly docs: document[];
}

// Interface d'un document d'une liste d'ouvrage
export interface document {
    readonly key: string;
    readonly title: string;
    readonly author_key: string[];
    readonly author_name: string[];
    readonly cover_edition_key?: string;
    readonly cover_i?: number;
}

// Interface d'un.e auteur.ice
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

// Interface d'une biographie d'un.e auteur.ice
export interface authorBio {
    readonly value: string;
}

// Interface pour un ouvrage mis en favoris
export interface favoriteWork {
    key: string;
    title: string;
    photo: number;
}