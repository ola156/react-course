const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {isAdmin && loggedIn ? "Welcome Admin" : ""}
      {loggedIn ? "Welcome User" : ""}
    </div>
  );
};

export default UserStatus;
