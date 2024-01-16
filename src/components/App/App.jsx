import { Profile } from "../Profile/Profile";
import userData from "/src/userData.json";
import { FriendList } from "../FriendList/FriendList";
import friends from "/src/friends.json";
import transactions from "/src/transactions.json";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
