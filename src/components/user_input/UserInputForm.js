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
      props.setModalMessage("Numbers are not allowed!");
      props.setIsModalVisible(true);
    } else if (!username.trim()) {
      props.setModalMessage("Cannot be empty");
      props.setIsModalVisible(true);
    } else props.submit({ id: Math.random(), username, age });
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
