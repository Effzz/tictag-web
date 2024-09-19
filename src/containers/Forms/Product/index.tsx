import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';
import Form from 'antd/lib/form';
import { useForm } from 'antd/lib/form/Form';
import Input from 'antd/lib/input';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';

import { useCreateProduct, useUpdateProduct } from '../../../hooks/API/product';
import useNotify from '../../../hooks/notify/useNotify';
import { addProduct as addProductRedux, updateProduct as editProductRedux } from '../../../services/redux/slices/product';
import { displayDateString } from '../../../utils/func';
import classes from './index.module.less';

const ProductFormContainer = ({ onClose, initialFormData }: { onClose: () => void; initialFormData: any }) => {
    const notify = useNotify();
    const { mutate: addProduct, isLoading: isLoadingAddProduct } = useCreateProduct();
    const { mutate: editProduct, isLoading: isLoadingEditProduct } = useUpdateProduct();
    const [form] = useForm();
    const dispatch = useDispatch();
    const isEditForm = initialFormData ? true : false;
    const formLoading: boolean = isLoadingEditProduct || isLoadingAddProduct;

    const handleSubmit = (formValues: any) => {
        if (isEditForm) {
            editProduct(
                {
                    id: initialFormData.id,
                    ...formValues,
                    warrant_expired_at: displayDateString(formValues.warrant_expired_at, 'YYYY-MM-DD'),
                    created_at: dayjs().toString()
                },
                {
                    onSuccess: (res) => {
                        if (res.success) {
                            notify('Successfully edit product');
                            dispatch(editProductRedux(res.body));
                            onClose();
                        } else {
                            notify('Failed to edit product', 'error');
                        }
                    },
                    onError: () => {
                        notify('Failed to edit product', 'error');
                    }
                }
            );
        } else {
            addProduct(
                {
                    ...formValues,
                    warrant_expired_at: displayDateString(formValues.warrant_expired_at, 'YYYY-MM-DD'),
                    created_at: dayjs()
                },
                {
                    onSuccess: (res) => {
                        if (res.success) {
                            notify('Successfully add product');
                            dispatch(addProductRedux(res.body));
                            onClose();
                        } else {
                            notify('Failed to add product', 'error');
                        }
                    },
                    onError: () => {
                        notify('Failed to add product', 'error');
                    }
                }
            );
        }
    };

    useEffect(() => {
        if (initialFormData) {
            form.setFieldValue('sku', initialFormData.sku);
            form.setFieldValue('name', initialFormData.name);
            form.setFieldValue('price', initialFormData.price);
            form.setFieldValue('description', initialFormData.description);
            form.setFieldValue('warrant_expired_at', dayjs(initialFormData.warrant_expired_at));
        }
    }, [initialFormData]);

    return (
        <Form form={form} layout='vertical' onFinish={handleSubmit} className={classes['form-default']}>
            <Form.Item name='sku' label='SKU' rules={[{ required: true, message: 'Please enter SKU' }]}>
                <Input />
            </Form.Item>
            <Form.Item name='name' label='Product Name' rules={[{ required: true, message: 'Please enter product name' }]}>
                <Input />
            </Form.Item>
            <Form.Item name='price' label='Product Price' rules={[{ required: true, message: 'Please enter price of the product' }]}>
                <NumericFormat allowLeadingZeros={false} customInput={Input} placeholder='Enter Product price' autoComplete={'off'} />
            </Form.Item>
            <Form.Item name='description' label='Description' rules={[{ required: true, message: 'Please enter description' }]}>
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item name='warrant_expired_at' label='Warrant Expired Date' colon={false}>
                <DatePicker placeholder='Date' className='w-full' />
            </Form.Item>
            <Form.Item className='w-full'>
                <Button type='primary' htmlType='submit' className='w-full' loading={formLoading}>
                    {initialFormData ? 'Edit Product' : 'Add Product'}
                </Button>
                <Button htmlType='button' className='w-full text-black bg-white mt-3' onClick={() => onClose()} loading={formLoading}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProductFormContainer;
