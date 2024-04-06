import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getSingleUser = (id) => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const addUser = (user) => {
    axios
      .post("https://fakestoreapi.com/users", user)
      .then((res) => {
        console.log("User added:", res.data);
        // Update the users state or handle the response as needed
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (id, user) => {
    axios
      .put(`https://fakestoreapi.com/users/${id}`, user)
      .then((res) => {
        console.log("User updated:", res.data);
        // Update the users state or handle the response as needed
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://fakestoreapi.com/users/${id}`)
      .then(() => {
        console.log("User deleted successfully");
        // Update the users state or handle the response as needed
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-20">
      <nav className="bg-gray-500 p-4 flex items-center justify-between ">
        <div>
          <h1 className="text-white text-xl font-semibold">User Management</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Link to={"/login"} placeholder="Login to your Account">
            <i className="fas fa-user-circle text-white text-2xl"></i>
          </Link>
        </div>
      </nav>

      <div className=" flex flex-row">
        <aside className="bg-gray-800 text-white w-[12%] min-h-screen p-4">
          <nav>
            <ul className="space-y-2">
              <li>
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => addUser()}
                >
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span>Add User</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => getSingleUser()}
                >
                  <div className="flex items-center">
                    <i className="fas fa-money-bill-wave mr-2"></i>
                    <span>Edit User</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => updateUser()}
                >
                  <div className="flex items-center">
                    <i className="fas fa-chart-bar mr-2"></i>
                    <span>Update User</span>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => deleteUser()}
                >
                  <div className="flex items-center">
                    <i className="fas fa-file-alt mr-2"></i>
                    <span>Delete User</span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        <main className=" text-white w-[88%] min-h-screen p-4 mx-2"></main>
      </div>
    </div>
  );
};

export default Admin;
