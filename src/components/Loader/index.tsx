import { LoadingOutlined } from '@ant-design/icons';
import Spin from 'antd/lib/spin';

const LoaderC = () => {
    return <Spin indicator={<LoadingOutlined spin />} size='large' />;
};

export default LoaderC;
