import './MemberItem.css';
import MemberItemList from './MemberItemList';
const MemberItem = (props) => {
	return (
		<ul className="list_body">
			{props.db.map((item) => {
				return <MemberItemList key={item.id} id={item.id} thumb={item.thumb} name={item.name} email={item.email} />;
			})}
		</ul>
	);
};
export default MemberItem;
