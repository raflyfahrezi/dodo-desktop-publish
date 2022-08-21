export interface User {
    id?: number
    name: string
    created_at?: string
    updated_at?: string
}

export interface UserChild extends User {
    id_parent?: number
}

export interface UserParent extends User {
    email: string
    token: string
    password?: string
    iat?: number
}
