import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
    gSeq: 0,
    gName: 'Node 스터디 (중복 안됩니다!)',
    gDesc: 'Node.js 스터디 모임입니다!',
    gDday: '2023-10-28',
    gMaxMem: 10,
    gCategory: 'st',
    gCoverImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1_J07ruu0QuBhaD6HSDkvbQdW_OOENXmiA&usqp=CAU',
    mTitle: 'Node.js 강의 듣기',
    mContent: 'Node.js 강의 쳅터 1 듣고 오기',
    mLevel: 5,
};

const dummyGroupSlice = createSlice({
    name: 'dummyGroup',
    initialState,
    reducers: {
        changeGroup(state, action) {
            state.gSeq = action.payload.gSeq;
            state.gName = action.payload.gName;
            state.gDesc = action.payload.gDesc;
            state.gDday = action.payload.gDday;
            state.gMaxMem = action.payload.gMaxMem;
            state.gCategory = action.payload.gCategory;
            state.gCoverImg = action.payload.gCoverImg;
            state.mTitle = action.payload.mTitle;
            state.mContent = action.payload.mContent;
            state.mLevel = action.payload.mLevel;
        },

        // changeLike(state, action) {
        //   let 번호 = state.findIndex((item) => item.id === action.payload);
        //   console.log(state[번호 + 1].like);
        //   // state[번호 + 1].like = false;
        //   state[번호 + 1].like = !state[번호 + 1].like;
        //   // state[번호 + 1].like ? false : true;
        // },
    },
});

export default dummyGroupSlice.reducer;
export const { changeGroup } = dummyGroupSlice.actions;