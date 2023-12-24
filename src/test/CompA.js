import Box from './Box';
import CompAA from './CompAA';
const style = {
	backgroundColor: '#d3b1b1',
	width: '80%',
	textAlign: 'center',
	padding: '20px',
};

const CompA = () => {
	return (
		<>
			<Box style={style}>
				CompA <CompAA />
			</Box>
			<Box style={style}>
				CompA <CompAA />
			</Box>
			<Box style={style}>
				CompA <CompAA />
			</Box>
		</>
	);
};
export default CompA;
