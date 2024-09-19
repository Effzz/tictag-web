import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dummyWarrantClaims } from '../../../constants/dummy/claims';
import { IClaim } from '../../../interfaces/claims';

const initialClaims: IClaim[] = dummyWarrantClaims;

interface ISliceClaimState {
    claims: IClaim[];
}

const initialState: ISliceClaimState = {
    claims: initialClaims
};

const claimSlice = createSlice({
    name: 'claims',
    initialState,
    reducers: {
        setClaim(state, action: PayloadAction<IClaim[]>) {
            state.claims = action.payload;
        },
        updateClaim(state, action: PayloadAction<IClaim>) {
            const { id, ...changes } = action.payload;
            const index = state.claims.findIndex((claim) => claim.id === id);
            if (index >= 0) {
                state.claims[index] = { ...state.claims[index], ...changes };
            }
        }
    }
});

export const { setClaim, updateClaim } = claimSlice.actions;
export default claimSlice.reducer;
