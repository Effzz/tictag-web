import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import Input from 'antd/lib/input';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useRequestSignIn } from '../../hooks/API/signin';
import { IApiResponse } from '../../interfaces/response/api';
import { ISignIn } from '../../interfaces/signin';
import { setData as setUserData } from '../../services/redux/slices/user';
import classes from './SignIn.module.less';

const SignInFormContainer = () => {
    const [signInForm] = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mutate: processSignIn, isLoading } = useRequestSignIn();

    const handleFinishForm = (formValues: ISignIn) => {
        processSignIn(formValues, {
            onSuccess(response: IApiResponse) {
                navigate('/products');
                dispatch(setUserData(response.data));
            }
        });
    };
    return (
        <Form form={signInForm} layout='vertical' className={classes['form-default']} onFinish={handleFinishForm}>
            <FormItem
                name='username'
                label='Username'
                rules={[
                    {
                        required: true
                    }
                ]}
                validateTrigger='onBlur'
                extra={null}
            >
                <Input placeholder='Please insert username (admin)' />
            </FormItem>
            <FormItem
                name='password'
                label='Password'
                rules={[
                    {
                        required: true
                    }
                ]}
                validateTrigger='onBlur'
                extra={null}
            >
                <Input.Password placeholder='Please insert password (admin)' />
            </FormItem>
            <Button htmlType='submit' className='w-full bg-blue-500 text-white hover:bg-blue-500 hover:text-white' loading={isLoading}>
                Sign In
            </Button>
        </Form>
    );
};

export default SignInFormContainer;
