import { auth } from "../firebase";
import { formatDate } from "../helpers";
export const Message = ({ message }) => {

  let newStyle = 'message';

  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = message.uid;
    newStyle = user === newUser ? 'my-message' : 'message';
  }

  return (
    <article className={newStyle}>
      <div>
        <div className="text-message">
          <p className="text">{message.text}</p>
        </div>
          <p className="user">{formatDate(message.timestamp)}</p>
      </div>
      <img src={message.photo} alt="user photo" referrerPolicy="no-referrer"/>
    </article>
  )
}
