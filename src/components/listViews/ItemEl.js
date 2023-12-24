import Row from "../ui/Row";
import './ItemEl.css';
const ItemEl = (props) => {
	return (
		<Row className="item_el">
			<span className="title">{props.title}</span>
			<span className="content">{props.content}</span>
		</Row>
	);
};
export default ItemEl;
