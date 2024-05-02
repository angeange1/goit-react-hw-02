import FriendListItem from "../FriendListItem/FriendListItem"

const FriendList = ({friends}) => {
	return (<ul>
		{friends.map((friend) => {
			return <li key={friend.id}>
				<FriendListItem name={friend.name} avatar={friend.avatar} status={friend.isOnline} />
			</li>
		})
		}
</ul>)}


export default FriendList