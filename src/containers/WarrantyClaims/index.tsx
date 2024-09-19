import { Button, Table, Tag } from 'antd/lib';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useUpdateWarrantClaim } from '../../hooks/API/claims';
import useNotify from '../../hooks/notify/useNotify';
import { updateClaim as updateReduxClaim } from '../../services/redux/slices/claims';
import { displayDateString } from '../../utils/func';
import AdminLayout from '../Layout/Admin';
import ModalConfirmation from '../Modal/Confirmation';

const WarrantyClaimsPageContainer = () => {
    const [modalMode, setModalMode] = useState<'Approve' | 'Reject' | undefined>(undefined);
    const [openConfirmationModal, setOpenConfirmationModal] = useState<boolean>(false);
    const [confirmationData, setConfirmationData] = useState<any>(null);
    const { claims } = useSelector((state: any) => state?.claims);
    const { mutate: updateWarrant, isLoading: isLoadingUpdate } = useUpdateWarrantClaim();
    const notify = useNotify();
    const dispatch = useDispatch();

    const onConfirmAction = () => {
        if (modalMode === 'Approve') {
            updateWarrant(
                {
                    id: confirmationData.id,
                    status: 'Approved'
                },
                {
                    onSuccess: () => {
                        dispatch(
                            updateReduxClaim({
                                ...confirmationData,
                                status: 'Approved'
                            })
                        );
                        notify('Successfully approve warranty claim.');
                        setOpenConfirmationModal(false);
                    },
                    onError: () => {
                        notify('Failed to approve warranty claim.', 'error');
                    }
                }
            );
        } else if (modalMode === 'Reject') {
            updateWarrant(
                {
                    id: confirmationData.id,
                    status: 'Rejected'
                },
                {
                    onSuccess: () => {
                        dispatch(
                            updateReduxClaim({
                                ...confirmationData,
                                status: 'Rejected'
                            })
                        );
                        notify('Successfully reject warranty claim.');
                        setOpenConfirmationModal(false);
                    },
                    onError: () => {
                        notify('Failed to reject warranty claim.', 'error');
                    }
                }
            );
        }
    };

    const columns: any = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'SKU',
            dataIndex: ['product', 'sku'],
            key: 'sku'
        },
        {
            title: 'Product Name',
            dataIndex: ['product', 'name'],
            key: 'product_name'
        },
        {
            title: 'Product Price',
            dataIndex: ['product', 'price'],
            key: 'product_price',
            render: (text: string | number) => {
                const priceNum: number = parseInt(`${text}`) || 0;
                return '$ ' + priceNum.toFixed(2);
            }
        },
        {
            title: 'Claimed Username',
            dataIndex: ['user', 'username'],
            key: 'username'
        },
        {
            title: 'Claimed Full Name',
            dataIndex: ['user', 'name'],
            key: 'fullname'
        },
        {
            title: 'Warrant Expired at',
            dataIndex: ['product', 'warrant_expired_at'],
            key: 'warrant_expired_at',
            render: (text: string) => {
                return text ? displayDateString(text) : '-';
            }
        },
        {
            title: 'Requested at',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text: string) => {
                return text ? displayDateString(text) : '-';
            }
        },
        {
            title: 'Status',
            key: 'status',
            render: (obj: any) => {
                const text: string = obj.status;
                const isWarrantyValid = dayjs(obj.product?.warrant_expired_at).isAfter(dayjs());
                let classString: string | undefined = undefined;

                if (!isWarrantyValid) {
                    return <Tag className={'bg-red-800 text-white border-red-800'}>Expired</Tag>;
                }
                if (text === 'Pending') {
                    classString = 'bg-yellow-600 text-white border-yellow-600';
                } else if (text === 'Approved') {
                    classString = 'bg-green-600 text-white border-green-600';
                } else if (text === 'Rejected') {
                    classString = 'bg-red-600 text-white border-red-600';
                }
                return <Tag className={classString}>{text}</Tag>;
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (obj: any) => {
                const isWarrantyValid = dayjs(obj.product.warrant_expired_at).isAfter(dayjs());
                if (!isWarrantyValid) {
                    return <i className='text-red-500'>Expired</i>;
                }

                if (obj.status !== 'Pending') {
                    return '';
                }

                return (
                    <div className='flex gap-2'>
                        <Button
                            type='primary'
                            onClick={() => {
                                setModalMode('Approve');
                                setConfirmationData(obj);
                                setOpenConfirmationModal(true);
                            }}
                        >
                            Approve
                        </Button>
                        <Button
                            type='text'
                            className='bg-red-600 text-white'
                            onClick={() => {
                                setModalMode('Reject');
                                setConfirmationData(obj);
                                setOpenConfirmationModal(true);
                            }}
                        >
                            Reject
                        </Button>
                    </div>
                );
            }
        }
    ];

    useEffect(() => {
        if (!openConfirmationModal) {
            // clear
            setConfirmationData(null);
            setModalMode(undefined);
        }
    }, [openConfirmationModal]);

    return (
        <AdminLayout>
            <div className='flex-row justify-between items-center mb-4'>
                <h1 className='text-3xl font-bold'>Warranty Claim List</h1>
                <p className='mt-1 text-gray-600'>List of warranty claims from customer</p>
            </div>
            <Table
                dataSource={claims}
                columns={columns}
                rowKey='id'
                pagination={{
                    pageSize: 5,
                    showSizeChanger: false,
                    showQuickJumper: true
                }}
            />
            <ModalConfirmation
                title={modalMode === 'Approve' ? 'Are you sure to approve this claim?' : 'Are you sure to reject this claim?'}
                open={openConfirmationModal}
                toggle={setOpenConfirmationModal}
                onConfirm={onConfirmAction}
                isLoading={isLoadingUpdate}
            />
        </AdminLayout>
    );
};

export default WarrantyClaimsPageContainer;
