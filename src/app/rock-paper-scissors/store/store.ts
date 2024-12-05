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
}

// useCounterStore
export const useStore = create<Store & Actions>((set) => ({
	basicV: { user: 0, computer: 0 },
	bonusV: { user: 0, computer: 0 },
	basicType: true,
	state: 'start',
	modal: false,

	//actions
	// increase: () => set((state) => ({ count: state.count + 1 })),
	showModal: () => set((state) => ({ modal: true })),
	closeModal: () => set((state) => ({ modal: false })),
	shitchType: () => set((state) => ({ basicType: !state.basicType })),
}));
