'use client';
import { useStore } from '../../store/store';

import { useEffect } from 'react';
import { states } from '../../helpers/states';
import PlayingBoard from '../PlayingBoard/PlayingBoad';
import OptionsBoard from '../OptionsBoard/OptionsBoard';
import ResultsBoard from '../ResultsBoard/ResultsBoard';

//TODO: create components
/*
[x] board basic
[] board bonus
[-] playing window (you pick, the house pick)
[] result window
  */

export default function MainBoard() {
	const { state, setStateGame } = useStore((state) => state);

	useEffect(() => {
		// change state to result when is playing
		if (state == states.playing) {
			setTimeout(() => {
				setStateGame(states.result);
			}, 2000);
		}

		console.log({ useEffec: state });
	}, [state]);

	return (
		<>
			{/* start */}
			{/* <OptionsBoard /> */}

			{/* playing */}
			<PlayingBoard />

			{/* result */}
			{/* <ResultsBoard /> */}
		</>
	);
}
