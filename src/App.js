import { useState } from 'react';
import Lists from './components/listViews/Lists';

const memberDB = [
	{ id: 'm1', name: '김경아', thumb: 'http://qwerew.cafe24.com/images/pet-1.jpg', email: 'abc@def.com' },
	{ id: 'm2', name: '김망고', thumb: 'http://qwerew.cafe24.com/images/pet-2.jpg', email: 'dge@def.com' },
	{ id: 'm3', name: '김민정', thumb: 'http://qwerew.cafe24.com/images/pet-3.jpg', email: 'weet@def.com' },
	{ id: 'm4', name: '윤현선', thumb: 'http://qwerew.cafe24.com/images/pet-4.jpg', email: 'gss@def.com' },
	{ id: 'm5', name: '이소정', thumb: 'http://qwerew.cafe24.com/images/pet-5.jpg', email: 'xxt@def.com' },
];
const App = () => {
	const [addList, setAddList] = useState(memberDB);

	const addListHandler = (db) => {
		setAddList((prev) => {
			console.log("prev",prev);
			return [db, ...prev];
		});
	};

	return (
		<div>
			<Lists db={addList} newList={addListHandler} />
		</div>
	);
};
export default App;
