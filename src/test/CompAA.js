import Box from './Box';

const style = {
	backgroundColor: '#a5b1b1',
	width: '23%',
	textAlign: 'center',
	padding: '20px',
	display: 'inline-block',
};

const CompAA = () => {
	return (
		<>
			<Box style={style}>CompAA</Box>
			<Box style={style}>CompAA</Box>
			<Box style={style}>CompAA</Box>
		</>
	);
};
export default CompAA;
