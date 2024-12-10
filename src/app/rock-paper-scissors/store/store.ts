import { create } from 'zustand';

interface values {
	user: number;
	computer: number;
}

// State types
interface Store {
	basicV: values;
	bonusV: values;
	basicType: boolean;
	state: string;
	modal: boolean;
}

// Action types
interface Actions {
	showModal: () => void;
	closeModal: () => void;
	shitchType: () => void;
	setStateGame: (newState: string) => void;
}

export const useStore = create<Store & Actions>((set) => ({
	basicV: { user: 1, computer: 1 },
	bonusV: { user: 2, computer: 2 },
	basicType: true,
	state: 'start',
	modal: false,

	//actions
	showModal: () => set((state) => ({ modal: true })),
	closeModal: () => set((state) => ({ modal: false })),
	shitchType: () => set((state) => ({ basicType: !state.basicType })),
	setStateGame: (newState: string) => set((state) => ({ state: newState })),
}));
