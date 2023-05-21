import { Profile } from "./components/Profile/Profile.jsx";
import { Statistics } from "components/Statistics/Statistics.jsx";
import { FriendList } from "components/FriendList/FriendList.jsx";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory.jsx";
import { Container } from "components/App.styled.jsx";
// import css from "./Profile/Profile.module.css";
// import user from "./Profile/"
import user from "components/objects/user.json";
import data from "components/objects/data.json";
import friends from "components/objects/friends.json";
import transactions from "components/objects/transactions.json";

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} >
      </Profile>
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
     
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </Container>

  )
};
