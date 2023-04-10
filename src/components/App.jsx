import { Profile } from './Profile/Profile';
import userData from '../user.json';
import { Statistics } from './Statistic/Statistics';
import { FriendsList } from './Friends/FriendsList';
import transactions from '../transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';
import dataStat from '../data.json';
import friendsData from '../friends.json';
export function App() {
  return (
    <>
      <div>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <Statistics stats={dataStat} title={"Upload stats"}/>
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactions} />;
    </>
  );
}
