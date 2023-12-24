import { useState } from 'react';
import Row from "../ui/Row";
import './Items.css';

import ItemEl from './ItemEl';
const Items = (props) => {
	let initName = props.name;
	const [newName, newNameFn] = useState(props.name);
	const [count, setCount] = useState(0);

	function clickHandler() {
		setCount(1);
		if (count == 1) {
			newNameFn(initName);
			setCount(0);
		} else {
			newNameFn('🎈🎈🎈');
		}
	}
	return (
		<Row className="items col">
			<img src={props.thumb} alt={props.name} />
			<ItemEl title="이름" content={props.name} />
			<ItemEl title="이메일" content={props.email} />
		</Row>
	);
};

export default Items;
