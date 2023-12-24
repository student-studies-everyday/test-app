const style = {
	color: 'white',
	margin: '20px 20px 0 0',
	borderRadius: '20px',
};
const Box = (props) => {
	console.log(props);
	const newStyle = { ...style, ...props.style };
  console.log('newStyle',newStyle)
	return <div style={newStyle}>Box {props.children}</div>;
};
export default Box;
