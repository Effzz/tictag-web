import { IProduct } from '../product';

export interface IClaim {
    id: number;
    product: IProduct;
    user: {
        name: string;
        username: string;
        email: string;
    };
    status: 'Pending' | 'Approved' | 'Rejected';
    created_at: Date;
    updated_at: Date;
}
