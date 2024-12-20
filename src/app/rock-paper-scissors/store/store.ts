import { create } from 'zustand';

interface values {
	user: number;
	computer: number;
}

interface Items {
	user: string;
	computer: string;
}

// State types
interface Store {
	basicV: values;
	bonusV: values;
	basicType: boolean;
	state: string;
	modal: boolean;
	items: Items;
}

// Action types
interface Actions {
	showModal: () => void;
	closeModal: () => void;
	shitchType: () => void;
	setStateGame: (newState: string) => void;
	// savePickekdItems: (data: Items) => void;
	savePickedItems: (selected: { user: string; computer: string }) => void;
}

export const useStore = create<Store & Actions>((set) => ({
	basicV: { user: 1, computer: 1 },
	bonusV: { user: 2, computer: 2 },
	basicType: true,
	state: 'start',
	modal: false,
	items: { user: '', computer: '' },

	//actions
	showModal: () => set((state) => ({ modal: true })),
	closeModal: () => set((state) => ({ modal: false })),
	shitchType: () => set((state) => ({ basicType: !state.basicType })),
	setStateGame: (newState: string) => set((state) => ({ state: newState })),

	savePickedItems: (seleted) =>
		set((state) => ({
			items: { user: seleted.user, computer: seleted.computer },
		})),
}));
