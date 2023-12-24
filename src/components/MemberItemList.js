import { useState } from 'react';
import ItemThumb from './ItemThumb';
import ItemDesc from './ItemDesc';
const MemberItemList = (props) => {
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
		<li className="list_item">
			<ItemThumb thumb={props.thumb}></ItemThumb>
			<ItemDesc name={newName} email={props.email}></ItemDesc>
			<button onClick={clickHandler}>이름변경</button>
		</li>
	);
};

export default MemberItemList;
