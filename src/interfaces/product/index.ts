export interface IProduct {
    id: number;
    sku: string;
    name: string;
    price: number;
    description: string;
    warrant_expired_at: string;
    created_at: Date | string;
}
