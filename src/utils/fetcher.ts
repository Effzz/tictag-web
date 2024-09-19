import { IApiResponse } from '../interfaces/response/api';
export const fakeApiCall = (body: any = [], fakeData: any = []): Promise<IApiResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: 'Fake API call successful',
                data: fakeData,
                body: body
            });
        }, 2000);
    });
};
