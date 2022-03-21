function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
      <p>
        User currently
        {unreadMessages.length > 0 ? <b> has </b> : <b> has not </b>}unread
        messages
      </p>
    </div>
  );
}
export default MailBox;
