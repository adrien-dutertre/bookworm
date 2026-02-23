export interface iWork {
    readonly title: string;
    readonly authors: string[];
    readonly description: string;
    readonly covers: number[];
    readonly key: string;
}

export interface iSearchWorks {
    readonly numFound: number;
    readonly docs: iWork[];
}