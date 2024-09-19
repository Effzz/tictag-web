import Modal from 'antd/lib/modal/Modal';

import { IModal } from '../../../interfaces/modal';

interface IConfirmationModal extends IModal {
    onConfirm: (v: any) => void;
    isLoading: boolean;
}

const ModalConfirmation = ({ title, open, toggle, children, onConfirm, isLoading }: IConfirmationModal) => {
    return (
        <Modal
            open={open}
            onCancel={() => toggle(false)}
            title={title}
            okButtonProps={{ className: 'bg-red-500' }}
            onOk={onConfirm}
            confirmLoading={isLoading}
        >
            {children}
        </Modal>
    );
};

export default ModalConfirmation;
