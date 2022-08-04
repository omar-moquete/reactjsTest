import React from "react";
import styles from "./App.module.scss";
import UserInputForm from "./components/user_input/UserInputForm";
import Modal from "./components/UI/Modal";
import UsersList from "./components/users_list/UsersList";

function App() {
  const [users, setUsers] = React.useState([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");

  const submitHandler = function (newUser) {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <div className={styles["main-wrapper"]}>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        message={modalMessage}
      />
      <UserInputForm
        submit={submitHandler}
        setIsModalVisible={setIsModalVisible}
        setModalMessage={setModalMessage}
      />
      <UsersList users={users} />
    </div>
  );
}

export default App;
