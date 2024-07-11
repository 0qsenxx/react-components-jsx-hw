import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./db/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./db/data.json";
import FriendsList from "./components/FriendList/FriendList";
import friends from "./db/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transaktions from './db/transaktions.json';

function App() {
  return (
    <>
      <Profile userInfo={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transaktions}/>
    </>
  );
}

export default App;
