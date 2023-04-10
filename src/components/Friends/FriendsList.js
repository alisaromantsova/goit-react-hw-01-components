
import friendsData from '../../friends.json'
import {FriendListItem} from '../Friends/FriendListItem'
import css from './FriendsList.module.css'
export function FriendsList(){
return(
    <ul className={css.friendList}>
   { friendsData.map(({id,avatar,name,isOnline})=>{
           return <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline}/>
        }) }
</ul>
)
}