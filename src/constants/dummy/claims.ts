import { IClaim } from '../../interfaces/claims';

export const dummyWarrantClaims: IClaim[] = [
    {
        id: 1,
        product: {
            id: 1,
            sku: 'SKU-0001',
            name: 'Product 1',
            price: 199.99,
            description: 'Description for Product 1',
            warrant_expired_at: '2025-08-19T00:00:00Z',
            created_at: '2022-06-15T00:00:00Z'
        },
        user: {
            name: 'John Doe',
            username: 'john.doe123',
            email: 'john.doe@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-08-01T10:30:00Z'),
        updated_at: new Date('2024-08-05T12:00:00Z')
    },
    {
        id: 2,
        product: {
            id: 2,
            sku: 'SKU-0002',
            name: 'Product 2',
            price: 299.99,
            description: 'Description for Product 2',
            warrant_expired_at: '2024-12-30T00:00:00Z',
            created_at: '2022-03-20T00:00:00Z'
        },
        user: {
            name: 'Jane Smith',
            username: 'jane.smith456',
            email: 'jane.smith@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-07-29T08:00:00Z'),
        updated_at: new Date('2024-08-03T11:00:00Z')
    },
    {
        id: 3,
        product: {
            id: 3,
            sku: 'SKU-0003',
            name: 'Product 3',
            price: 399.99,
            description: 'Description for Product 3',
            warrant_expired_at: '2026-01-15T00:00:00Z',
            created_at: '2023-05-12T00:00:00Z'
        },
        user: {
            name: 'Emily Johnson',
            username: 'emily.johnson789',
            email: 'emily.johnson@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-06-20T15:45:00Z'),
        updated_at: new Date('2024-07-02T10:15:00Z')
    },
    {
        id: 4,
        product: {
            id: 4,
            sku: 'SKU-0004',
            name: 'Product 4',
            price: 129.99,
            description: 'Description for Product 4',
            warrant_expired_at: '2023-11-10T00:00:00Z',
            created_at: '2021-10-05T00:00:00Z'
        },
        user: {
            name: 'Michael Brown',
            username: 'mike.brown101',
            email: 'mike.brown@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-07-10T11:30:00Z'),
        updated_at: new Date('2024-07-14T09:00:00Z')
    },
    {
        id: 5,
        product: {
            id: 5,
            sku: 'SKU-0005',
            name: 'Product 5',
            price: 499.99,
            description: 'Description for Product 5',
            warrant_expired_at: '2027-02-19T00:00:00Z',
            created_at: '2023-08-14T00:00:00Z'
        },
        user: {
            name: 'Olivia White',
            username: 'olivia.white555',
            email: 'olivia.white@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-05-23T14:00:00Z'),
        updated_at: new Date('2024-06-01T17:30:00Z')
    },
    {
        id: 6,
        product: {
            id: 6,
            sku: 'SKU-0006',
            name: 'Product 6',
            price: 229.99,
            description: 'Description for Product 6',
            warrant_expired_at: '2025-09-12T00:00:00Z',
            created_at: '2021-12-09T00:00:00Z'
        },
        user: {
            name: 'William Green',
            username: 'will.green202',
            email: 'william.green@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-04-19T09:15:00Z'),
        updated_at: new Date('2024-05-01T11:00:00Z')
    },
    {
        id: 7,
        product: {
            id: 7,
            sku: 'SKU-0007',
            name: 'Product 7',
            price: 89.99,
            description: 'Description for Product 7',
            warrant_expired_at: '2023-06-30T00:00:00Z',
            created_at: '2020-09-25T00:00:00Z'
        },
        user: {
            name: 'Sophia Davis',
            username: 'sophia.davis321',
            email: 'sophia.davis@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-03-10T08:30:00Z'),
        updated_at: new Date('2024-03-15T12:45:00Z')
    },
    {
        id: 8,
        product: {
            id: 8,
            sku: 'SKU-0008',
            name: 'Product 8',
            price: 759.99,
            description: 'Description for Product 8',
            warrant_expired_at: '2026-12-05T00:00:00Z',
            created_at: '2022-01-02T00:00:00Z'
        },
        user: {
            name: 'James Martinez',
            username: 'james.martinez876',
            email: 'james.martinez@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-02-05T10:00:00Z'),
        updated_at: new Date('2024-02-20T09:30:00Z')
    },
    {
        id: 9,
        product: {
            id: 9,
            sku: 'SKU-0009',
            name: 'Product 9',
            price: 649.99,
            description: 'Description for Product 9',
            warrant_expired_at: '2024-07-18T00:00:00Z',
            created_at: '2021-05-22T00:00:00Z'
        },
        user: {
            name: 'Ava Rodriguez',
            username: 'ava.rodriguez654',
            email: 'ava.rodriguez@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-01-19T14:30:00Z'),
        updated_at: new Date('2024-02-01T12:00:00Z')
    },
    {
        id: 10,
        product: {
            id: 10,
            sku: 'SKU-0010',
            name: 'Product 10',
            price: 189.99,
            description: 'Description for Product 10',
            warrant_expired_at: '2023-03-15T00:00:00Z',
            created_at: '2020-11-03T00:00:00Z'
        },
        user: {
            name: 'Alexander Wilson',
            username: 'alex.wilson123',
            email: 'alexander.wilson@gmail.com'
        },
        status: 'Pending',
        created_at: new Date('2024-01-10T16:00:00Z'),
        updated_at: new Date('2024-01-20T10:00:00Z')
    }
];
