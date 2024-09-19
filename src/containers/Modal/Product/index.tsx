import Modal from 'antd/lib/modal/Modal';

import { IModal } from '../../../interfaces/modal';

const ModalProduct = ({ title, open, toggle, children }: IModal) => {
    return (
        <Modal open={open} footer={null} onCancel={() => toggle(false)} title={title}>
            {children}
        </Modal>
    );
};

export default ModalProduct;
