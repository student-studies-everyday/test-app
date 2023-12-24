import { useState } from 'react';
import Panel from './Panel';
const Accordion = () => {
	const [active, setActive] = useState(0);

	return (
		<div>
			<h2>아코디언</h2>
			<Panel title="패널1" active={active===0} onActive={()=>{setActive(0)}}>1111111111111111111111111 Lorem ipsu1m dolor sit amet consectetur adipisicing elit. Quis, consectetur quidem nisi praesentium sint voluptates ipsa molestiae sed sit esse facilis optio harum mollitia laboriosam blanditiis, provident, distinctio dolor quia.</Panel>
			<Panel title="패널2" active={active===1} onActive={()=>{setActive(1)}}>2222222222222222222222222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consectetur quidem nisi praesentium sint voluptates ipsa molestiae sed sit esse facilis optio harum mollitia laboriosam blanditiis, provident, distinctio dolor quia.</Panel>
		</div>
	);
};
export default Accordion;
