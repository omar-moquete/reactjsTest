import React from "react";
import styles from "./UsersList.module.scss";
import Card from "../UI/Card";

function UsersList(props) {
  const listItems = props.users.map((user) => (
    <li
      className={styles.li}
      key={user.id}
    >{`${user.username} (${user.age} years old)`}</li>
  ));
  return (
    <Card>
      <ul className={styles.ul}>
        {listItems.length > 0 ? (
          listItems
        ) : (
          <div>
            <h1> 😉👆🏽</h1>
            <h3>You have no users. Please click "Add User" to add one.</h3>
          </div>
        )}
      </ul>
    </Card>
  );
}

export default UsersList;
