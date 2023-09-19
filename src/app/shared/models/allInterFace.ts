

export interface Iuser{
    name: string;
    userId: string;
    role : Irole,
}

export type Irole = "admin" | "user"