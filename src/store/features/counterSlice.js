import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../../services/home'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 1,
        title: 'redux tookit'
    },
    reducers: {
        increment(state, { payload }) {
            state.count = state.count + payload || payload;
        },
        decrement(state) {
            state.count -= 1;
        },
    }
})

// 导出actions
export const { increment, decrement } = counterSlice.actions

// 内置了thunk插件，可以直接处理异步请求
export const asyncIncrement = (payload) => async (dispatch) => {
    // const data = await getData()
    const data = {
        data: {
            age: 10
        }
    }
    dispatch(increment(data.data?.age));
};

// 导出reducer，在创建store时使用到
export default counterSlice.reducer;
