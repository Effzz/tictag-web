import { useMutation } from 'react-query';

import { fakeApiCall } from '../../../utils/fetcher';

export const useUpdateWarrantClaim = () => {
    return useMutation((payload: { id: number; status: string }) => {
        return fakeApiCall(payload, payload);
    });
};
