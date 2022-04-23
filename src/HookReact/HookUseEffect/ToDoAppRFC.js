import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ToDoAppRFC() {
  const [arrTask, setArrTask] = useState([]);
  //Cách 1: sử dụng callback cho trường hợp bất đồng bộ
  //   useEffect(() => {
  //     let promise = axios({
  //       url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
  //       method: "GET",
  //     });

  //     promise.then((result) => {
  //       setArrTask(result.data);
  //     });
  //     promise.catch((error) => {
  //       console.log("error", error.response.data);
  //     });

  //     console.log('123')
  //   }, []);

  useEffect(async () => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      await setArrTask(result.data);

      console.log(result, "result");
    } catch (error) {
      console.log("err", error);
    }

    console.log(123);
  }, []);

  return (
    <div>
      <h3 className="text-center display-4">To Do App</h3>
      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {arrTask.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>
                    {task.status ? (
                      <span className="badge badge-success">complete</span>
                    ) : (
                      <span className="badge badge-danger">incomplete</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* 
    call 3 api (api liên quan đến nhau)
    api 1 có kết quả > đêm kết quả gọi api 2 > api 2 có kết quả gọi api 3 (async await)

    call 3 api (api không liên quan đến nhau)
    api-1 5s
    api-2 10s
    api-3 7s

    api-4 phải để 3 api kia chạy xong
    xài Promise.all([promise1, promise2, promise3]).then( () => {} )
*/
