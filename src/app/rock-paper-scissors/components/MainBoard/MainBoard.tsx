'use client';
import { useStore } from '../../store/store';

import { useEffect } from 'react';
import { states } from '../../helpers/states';
import PlayingBoard from '../PlayingBoard/PlayingBoad';
import OptionsBoard from '../OptionsBoard/OptionsBoard';

export default function MainBoard() {
	const { state, setStateGame } = useStore((state) => state);

	// change state to result when is playing
	useEffect(() => {
		if (state == states.playing) {
			setTimeout(() => {
				setStateGame(states.result);
			}, 2000);
		}
	}, [state]);

	return (
		<>
			{/* start */}
			{state == states.start && <OptionsBoard />}

			{/* playing */}
			{state != states.start && <PlayingBoard />}
		</>
	);
}
