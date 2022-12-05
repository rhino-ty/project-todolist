import { createSlice } from "@reduxjs/toolkit";
import { listData } from "../../static/listData";

const initialState = {
  listData: listData,
};

const listSlice = createSlice({
  name: "lists",
  initialState,
  // 리스트 추가, 제거, 수정 액션 미리 넣어주기, 수정은 이따가..
  reducers: {
    addHabit: (state, action) => {
      state.listData.habitTodos.push(action.payload);
    },
    addDaily: (state, action) => {
      state.listData.dailyTodos.push(action.payload);
    },
    deleteHabit: (state, action) => {
      const { id } = action.payload;
      state.listData.habitTodos((el) => el.id !== id);
    },
    deleteDaily: (state, action) => {
      const { id } = action.payload;
      state.listData.dailyTodos((el) => el.id !== id);
    },
  },
});
