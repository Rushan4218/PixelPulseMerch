import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice ({
  name: "menuState", 
  initialState: {
    showMenu: false,
  },
  reducers: {
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    }
  }
})

export const {setShowMenu} = menuSlice.actions;
export default menuSlice.reducer;