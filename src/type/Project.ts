import { Tech } from "./tech"

export type Project = {
    id: number,
    title: string,
    description?: string,
    content?: string,
    tech: Tech[]
}