import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ControlState {
  activeAction:
    | "SELECT_FLASHCARDS"
    | "CREATE_FLASHCARDS"
    | "EDIT_FLASHCARDS"
    | "PLAY_FLASHCARDS";
}
type ActionPayload =
  | "SELECT_FLASHCARDS"
  | "CREATE_FLASHCARDS"
  | "EDIT_FLASHCARDS"
  | "PLAY_FLASHCARDS";

const initialState: ControlState = {
  activeAction: "SELECT_FLASHCARDS",
};

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    SET_ACTIVE_ACTION: (state, action: PayloadAction<ActionPayload>) => {
      state.activeAction = action.payload;
    },
  },
});

export const { SET_ACTIVE_ACTION } = controlSlice.actions;

export default controlSlice.reducer;
