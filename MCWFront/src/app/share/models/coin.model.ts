export interface Icoin{
    coinId?: string
    name: string
    symbol?: string
    value?: number
    amount?: number
}

export interface Ijoin{
    userId?: string
    coinId?: string
    amount?: number
    joinId?: string
}