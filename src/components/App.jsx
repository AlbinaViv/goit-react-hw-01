import { Profile } from "./Profile";
import userData from "../userData.json";
import { FriendList } from "./FriendList";
import friends from "../friends.json";
// import { TransactionHistory } from "./TransactionHistory";
// import transactions from "../transactions.json";

// import "../css/App.css";

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
}

export default App;
