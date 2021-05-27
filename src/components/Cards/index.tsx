import React from 'react';

interface Props {
	card: string;
	cardIndex: number;
	handleShift(
		cardIndex: number,
		currentColumnIndex: number,
		nextColumnIndex: number,
	): void;
	isFirstColumn: boolean;
	isLastColumn: boolean;
	columnIndex: number;
}

const Card: React.FC<Props> = ({
	card,
	cardIndex,
	handleShift,
	isFirstColumn,
	isLastColumn,
	columnIndex,
}) => {
	return (
		<div>
			{!isFirstColumn && (
				<button
					onClick={() => handleShift(cardIndex, columnIndex, columnIndex - 1)}
				>
					Move Left
				</button>
			)}
			<span>{card}</span>
			{!isLastColumn && (
				<button
					onClick={() => handleShift(cardIndex, columnIndex, columnIndex + 1)}
				>
					Move Right
				</button>
			)}
		</div>
	);
};

export default Card;
