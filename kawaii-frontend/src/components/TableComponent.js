import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function TableComponent({ columns, data, onUpdate, onDelete }) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
						<TableCell key={column.field}>{column.headerName}</TableCell>
						))}
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, index) => (
						<TableRow key={index}>
							{columns.map((column) => (
								<TableCell key={column.field}>{row[column.field]}</TableCell>
							))}
							<TableCell>
								{/* Action buttons */}
								<Button
								variant="contained"
								color="primary"
								onClick={() => onUpdate(row.id)}  // Call onUpdate with the row ID
								>
									Update
								</Button>
								<Button
								variant="contained"
								color="secondary"
								onClick={() => onDelete(row.id)}  // Call onDelete with the row ID
								style={{ marginLeft: '10px' }}   // Add some space between buttons
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default TableComponent;
