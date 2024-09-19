import { useMutation } from 'react-query';

import { ISignIn } from '../../../interfaces/signin';
import { fakeApiCall } from '../../../utils/fetcher';

export const useRequestSignIn = () => {
    return useMutation((payload: ISignIn) => {
        return fakeApiCall(payload, { access_token: 'exampleaccesstoken' });
    });
};
