// [README] : reducer for explore page related state management

import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface State {
	currentTrack: any;
	selectedTracks: any[];
	paused: boolean;
}

const initialState = <State>{
	currentTrack: {},
	selectedTracks: [],
	paused: false,
};

const ReduxSlice = createSlice({
	name: 'PLAYER',
	initialState,
	reducers: {
		setCurrentTrack: (state, action) => {
			state.currentTrack = action.payload;
			state.paused = false;
		},
		setSelectedTracks: (state, action) => {
			state.selectedTracks = action.payload;
		},
		setPaused: (state, action) => {
			state.paused = action.payload;
		},
		reset: () => initialState,
	},
});

export const { setCurrentTrack, setSelectedTracks, setPaused, reset } = ReduxSlice.actions;

export const usePlayer = (): State =>
	useSelector((RootState: { player: State }) => RootState.player);

export default ReduxSlice.reducer;
