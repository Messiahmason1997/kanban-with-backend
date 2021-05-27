import React, { useState, useEffect } from 'react';
import Column from './components/Columns';
import kanbanServices from './service/fetchColumns';

export interface IColumn {
	title: string;
	card: string[];
	input: string;
}

const App: React.FC = () => {
	const [columns, setColumns] = useState<IColumn[] | null>(null);

	useEffect(() => {
		const fetchAllColumns = async () => {
			const initialColumns = await kanbanServices.fetchAllColumns();
			if (initialColumns) {
				setColumns(initialColumns.data.data);
			}
		};
		fetchAllColumns();
	}, []);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		columnIndex: number,
	): void => {
		if (columns) {
			const newColumns = [...columns];
			newColumns[columnIndex].input = e.target.value;
			setColumns(newColumns);
		}
	};

	const handleAddCard = (columnIndex: number): void => {
		if (columns && columns[columnIndex].input) {
			const newColumns = [...columns];

			newColumns[columnIndex].card.push(newColumns[columnIndex].input);
			newColumns[columnIndex].input = '';
			setColumns(newColumns);
		}
	};

	const handleShift = (
		cardIndex: number,
		columnIndex: number,
		nextColumnIndex: number,
	): void => {
		if (columns) {
			const newColumns = [...columns];
			const removedCard = newColumns[columnIndex].card.splice(cardIndex, 1);
			newColumns[nextColumnIndex].card.push(...removedCard);
			setColumns(newColumns);
		}
	};

	return (
		<div>
			{columns &&
				columns.map((column, columnIndex) => (
					<Column
						column={column}
						columnIndex={columnIndex}
						handleInputChange={handleInputChange}
						handleAddCard={handleAddCard}
						handleShift={handleShift}
						isFirstColumn={columnIndex === 0}
						isLastColumn={columnIndex === columns.length - 1}
					/>
				))}
		</div>
	);
};

export default App;
