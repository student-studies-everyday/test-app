import Box from './Box';
import CompA from './CompA';
const style = {
	backgroundColor: '#23b1c2',
	width: '50%',
	textAlign: 'center',
	margin: '20px auto',
	padding: '20px',
};

const Comp = () => {
	return (
		<Box style={style}>
			Comp <CompA />
		</Box>
	);
};
export default Comp;
