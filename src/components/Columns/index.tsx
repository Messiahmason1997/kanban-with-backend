import React from 'react';
import { IColumn } from '../../App';
import Card from '../Cards';

interface Props {
	column: IColumn;
	columnIndex: number;
	handleInputChange(
		e: React.ChangeEvent<HTMLInputElement>,
		columnIndex: number,
	): void;
	handleAddCard(columnIndex: number): void;
	handleShift(
		cardIndex: number,
		currentColumnIndex: number,
		nextColumnIndex: number,
	): void;
	isFirstColumn: boolean;
	isLastColumn: boolean;
}

const Column: React.FC<Props> = ({
	column,
	columnIndex,
	handleInputChange,
	handleAddCard,
	isFirstColumn,
	isLastColumn,
	handleShift,
}) => {
	return (
		<div>
			<h1>{column.title}</h1>
			{column.card.map((card, cardIndex) => (
				<Card
					card={card}
					cardIndex={cardIndex}
					isFirstColumn={isFirstColumn}
					isLastColumn={isLastColumn}
					columnIndex={columnIndex}
					handleShift={handleShift}
				/>
			))}
			<input
				type='text'
				onChange={(e) => handleInputChange(e, columnIndex)}
				value={column.input}
			/>
			<button onClick={() => handleAddCard(columnIndex)}>Submit</button>
		</div>
	);
};

export default Column;
