import c from './Heading.module.css';
const Heading = (props) => {
	return <h2 className={c.heading}>{props.content}</h2>;
};
export default Heading;
