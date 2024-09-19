import { useMutation } from 'react-query';

import { IProduct } from '../../../interfaces/product';
import { fakeApiCall } from '../../../utils/fetcher';

export const useCreateProduct = () => {
    return useMutation((payload: IProduct) => {
        return fakeApiCall(payload, payload);
    });
};

export const useUpdateProduct = () => {
    return useMutation((payload: IProduct) => {
        return fakeApiCall(payload);
    });
};

export const useDeleteProduct = () => {
    return useMutation((payload: IProduct) => {
        return fakeApiCall(payload);
    });
};
