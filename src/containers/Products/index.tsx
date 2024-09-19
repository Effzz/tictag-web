import Button from 'antd/lib/button';
import Table from 'antd/lib/table';

import { IProduct } from '../../interfaces/product';
import { displayDateString } from '../../utils/func';
import AdminLayout from '../Layout/Admin';

const ProductsPageContainer = () => {
    const data: IProduct[] = [
        {
            id: 1,
            sku: 'SKU001',
            name: 'Product 1',
            price: 29.99,
            description: 'Description for Product 1',
            warrant_expired_at: '2024-12-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 2,
            sku: 'SKU002',
            name: 'Product 2',
            price: 59.99,
            description: 'Description for Product 2',
            warrant_expired_at: '2024-11-30',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 3,
            sku: 'SKU003',
            name: 'Product 3',
            price: 89.99,
            description: 'Description for Product 3',
            warrant_expired_at: '2024-10-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 4,
            sku: 'SKU004',
            name: 'Product 4',
            price: 119.99,
            description: 'Description for Product 4',
            warrant_expired_at: '2024-09-30',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 5,
            sku: 'SKU005',
            name: 'Product 5',
            price: 149.99,
            description: 'Description for Product 5',
            warrant_expired_at: '2024-08-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 6,
            sku: 'SKU006',
            name: 'Product 6',
            price: 179.99,
            description: 'Description for Product 6',
            warrant_expired_at: '2024-07-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 7,
            sku: 'SKU007',
            name: 'Product 7',
            price: 209.99,
            description: 'Description for Product 7',
            warrant_expired_at: '2024-06-30',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 8,
            sku: 'SKU008',
            name: 'Product 8',
            price: 239.99,
            description: 'Description for Product 8',
            warrant_expired_at: '2024-05-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 9,
            sku: 'SKU009',
            name: 'Product 9',
            price: 269.99,
            description: 'Description for Product 9',
            warrant_expired_at: '2024-04-30',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 10,
            sku: 'SKU010',
            name: 'Product 10',
            price: 299.99,
            description: 'Description for Product 10',
            warrant_expired_at: '2024-03-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 11,
            sku: 'SKU011',
            name: 'Product 11',
            price: 329.99,
            description: 'Description for Product 11',
            warrant_expired_at: '2024-02-29',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 12,
            sku: 'SKU012',
            name: 'Product 12',
            price: 359.99,
            description: 'Description for Product 12',
            warrant_expired_at: '2024-01-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 13,
            sku: 'SKU013',
            name: 'Product 13',
            price: 389.99,
            description: 'Description for Product 13',
            warrant_expired_at: '2023-12-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 14,
            sku: 'SKU014',
            name: 'Product 14',
            price: 419.99,
            description: 'Description for Product 14',
            warrant_expired_at: '2023-11-30',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 15,
            sku: 'SKU015',
            name: 'Product 15',
            price: 449.99,
            description: 'Description for Product 15',
            warrant_expired_at: '2023-10-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 16,
            sku: 'SKU016',
            name: 'Product 16',
            price: 479.99,
            description: 'Description for Product 16',
            warrant_expired_at: '2023-09-30',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 17,
            sku: 'SKU017',
            name: 'Product 17',
            price: 509.99,
            description: 'Description for Product 17',
            warrant_expired_at: '2023-08-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 18,
            sku: 'SKU018',
            name: 'Product 18',
            price: 539.99,
            description: 'Description for Product 18',
            warrant_expired_at: '2023-07-31',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 19,
            sku: 'SKU019',
            name: 'Product 19',
            price: 569.99,
            description: 'Description for Product 19',
            warrant_expired_at: '2023-06-30',
            created_at: '2021-09-19T16:31:53.596Z'
        },
        {
            id: 20,
            sku: 'SKU020',
            name: 'Product 20',
            price: 599.99,
            description: 'Description for Product 20',
            warrant_expired_at: '2023-05-31',
            created_at: '2021-09-19T16:31:53.596Z'
        }
    ];
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'SKU',
            dataIndex: 'sku',
            key: 'sku'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text: number) => `$${text.toFixed(2)}`
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Warrant Expired At',
            dataIndex: 'warrant_expired_at',
            key: 'warrant_expired_at'
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text: string) => {
                return text ? displayDateString(text) : '-';
            }
        }
    ];
    const handleAddProduct = () => {
        console.log('add product');
    };
    return (
        <AdminLayout>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-3xl font-bold'>Product List</h1>
                <Button type='primary' onClick={handleAddProduct} className='bg-blue-700'>
                    Add Product
                </Button>
            </div>
            <Table
                dataSource={data}
                columns={columns}
                rowKey='id'
                pagination={{
                    pageSize: 5,
                    showSizeChanger: false,
                    showQuickJumper: true
                }}
            />
        </AdminLayout>
    );
};

export default ProductsPageContainer;
