import c from './Row.module.css';
const Row = (props) => {
	const addCls = props.className;
	return <div className={`${addCls} ${c.row}`}>{props.children}</div>;
};
export default Row;
