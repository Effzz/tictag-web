import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDeleteProduct } from '../../hooks/API/product';
import useNotify from '../../hooks/notify/useNotify';
import { removeProduct as deleteReduxProduct } from '../../services/redux/slices/product';
import { displayDateString } from '../../utils/func';
import ProductFormContainer from '../Forms/Product';
import AdminLayout from '../Layout/Admin';
import ModalConfirmation from '../Modal/Confirmation';
import ModalProduct from '../Modal/Product';

const ProductsPageContainer = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openConfirmationModal, setOpenConfirmationModal] = useState<boolean>(false);
    const [confirmationData, setConfirmationData] = useState<any>(null);
    const [initialFormData, setInitialFormData] = useState<any>(null);
    const { products } = useSelector((state: any) => state.product);
    const { mutate: deleteProduct, isLoading: isLoadingDeleteProduct } = useDeleteProduct();
    const notify = useNotify();
    const dispatch = useDispatch();

    const columns: any = [
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
            render: (text: string | number) => {
                const priceNum: number = parseInt(`${text}`) || 0;
                return '$ ' + priceNum.toFixed(2);
            }
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
        },
        {
            title: 'Action',
            key: 'action',
            render: (obj: any) => {
                return (
                    <div className='flex gap-2'>
                        <Button
                            type='primary'
                            onClick={() => {
                                setInitialFormData(obj);
                                setOpenModal(true);
                            }}
                        >
                            Edit
                        </Button>
                        <Button
                            type='text'
                            className='bg-red-600 text-white'
                            onClick={() => {
                                setConfirmationData(obj);
                                setOpenConfirmationModal(true);
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                );
            }
        }
    ];

    const onConfirmDelete = () => {
        deleteProduct(confirmationData, {
            onSuccess: () => {
                dispatch(deleteReduxProduct(confirmationData.id));
                notify('Successfully delete product');
                setOpenConfirmationModal(false);
            },
            onError: () => {
                notify('Failed to delete product', 'error');
            }
        });
    };

    const handleAddProduct = () => {
        setOpenModal(true);
    };

    useEffect(() => {
        if (!openModal) {
            setInitialFormData(null);
        }
    }, [openModal]);

    useEffect(() => {
        if (!openConfirmationModal) {
            setConfirmationData(null);
        }
    }, [openConfirmationModal]);

    return (
        <AdminLayout>
            <div className='flex justify-between items-center mb-4'>
                <div className='flex-row'>
                    <h1 className='text-3xl font-bold'>Product List</h1>
                    <p className='mt-1 text-gray-600'>List all products in WaveTech Electronics PTE LTD</p>
                </div>
                <Button type='primary' onClick={handleAddProduct} className='bg-blue-700'>
                    Add Product
                </Button>
            </div>
            <Table
                dataSource={products}
                columns={columns}
                rowKey='id'
                pagination={{
                    pageSize: 5,
                    showSizeChanger: false,
                    showQuickJumper: true
                }}
            />
            <ModalProduct open={openModal} toggle={setOpenModal} title={initialFormData ? 'Edit Product' : 'Add New Product'}>
                <ProductFormContainer onClose={() => setOpenModal(false)} initialFormData={initialFormData} />
            </ModalProduct>
            <ModalConfirmation
                title='Are you sure you want to delete selected product?'
                open={openConfirmationModal}
                toggle={setOpenConfirmationModal}
                onConfirm={onConfirmDelete}
                isLoading={isLoadingDeleteProduct}
            />
        </AdminLayout>
    );
};

export default ProductsPageContainer;
