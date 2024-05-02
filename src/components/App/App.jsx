import Profile from '../Profile/Profile'
import userData from "../../userData.json";
import FriendList from '../FriendList/FriendList'
import userFriends from "../../userFriends.json"
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from "../../transactions.json"


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={userFriends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App


