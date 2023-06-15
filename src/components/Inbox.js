import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InboxActions } from "../ReduxStore/InboxReducer";
// import { Link } from 'react-router-dom'
import "./Inbox.css";
import Sidebar from "./Sidebar";

const Inbox = () => {
  const dispatch = useDispatch();
  const inboxData = useSelector((state) => state.inboxReducer.inboxData);

  let url = "https://auth-et-default-rtdb.firebaseio.com  ";
  const email = localStorage.getItem("email").replace(/['@','.']/g, "");
  // const getData = async () => {
  //   try {
  //     const response = await fetch(`${url}/Inbox/${email}.json`);
  //     const data = await response.json();
  //     let arrayOfData = [];
  //     for (let key in data) {
  //       arrayOfData.unshift({ id: key, ...data[key] });
  //     }
  //     dispatch(InboxActions.changeInbox(arrayOfData));
  //     let count=0;
  //     arrayOfData.forEach((msg)=>{
  //       if(msg.read===false){
  //         count++;
  //       }
  //     })
  //     dispatch(InboxActions.updateUnread(count))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`${url}/Inbox/${email}/${id}.json`, {
        method: "DELETE",
      });
      dispatch(InboxActions.updateGet());
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHandler = (id) => {
    deleteData(id);
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <div className="parent">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="tableParent">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S. No</th>
              <th scope="col">From </th>
              <th scope="col">Subject </th>
              <th scope="col">Message </th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {inboxData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td scope="row">{index + 1}</td>
                  <td>{item.from}</td>
                  <td>{item.subject}</td>
                  <td>
                    <Link to={`/Inbox/${item.id}`}>Click to Open</Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => deleteHandler(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inbox;
