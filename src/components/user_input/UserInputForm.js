import React from "react";
import Card from "../UI/Card";
import styles from "./UserInputForm.module.scss";

function UserInputForm(props) {
  const [username, setUsername] = React.useState("");
  const [age, setAge] = React.useState("");
  const usernameHandler = (e) => setUsername(e.target.value);

  const ageHandler = (e) => setAge(e.target.value);

  const submit = function (e) {
    e.preventDefault();

    if (Array.from(username.trim()).some((char) => !isNaN(char))) {
      props.setModalMessage("Numbers are not allowed for username!");
      props.setIsModalVisible(true);
    } else if (!username.trim()) {
      props.setModalMessage("Username cannot be empty!");
      props.setIsModalVisible(true);
    } else if (!age.trim()) {
      props.setModalMessage("Age cannot be empty!");
      props.setIsModalVisible(true);
    } else if (Array.from(age.trim()).some((char) => isNaN(char))) {
      props.setModalMessage("Age can only be in numbers!");
      props.setIsModalVisible(true);
    } else {
      username.trim() && isNaN(username);
      props.submit({ id: Math.random(), username, age });
    }
  };

  return (
    <form onSubmit={submit}>
      <Card>
        <label>Username</label>
        <input
          type="text"
          className={styles.username}
          onChange={usernameHandler}
        />
        <label>Age (Years)</label>
        <input type="text" className={styles.age} onChange={ageHandler} />
        <button>Add User</button>
      </Card>
    </form>
  );
}

export default UserInputForm;
