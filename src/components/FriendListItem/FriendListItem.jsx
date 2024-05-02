import css from "./FriendListItem.module.css"

const on = css.onlineGreen
const off = css.offlineRed


const FriendListItem = ({ avatar, name, status }) => {
    return (<div>
  <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
      <p className = {status ? on : off }>{status ? "Online" : "Offline"}</p>
</div>) }

export default FriendListItem


