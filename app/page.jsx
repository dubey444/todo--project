"use client";
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");

  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { task, desc }]);
    //console.log(task)
    // console.log(desc)
    setdesc("");
    settask("");
    console.log(mainTask);
  };

  const deleteHandler = (index) =>{
    let copyTask =[...mainTask]
    copyTask.splice(index,1)
    setmainTask(copyTask)
  }

  const showText = (e) => {
    settask(e.target.value);
  };
  const Text = (e) => {
    setdesc(e.target.value);
  };
  // Rendering tasks dynamically if there are any
  let renderTask =
    mainTask.length > 0 ? (
      <ul>
        {mainTask.map((task, index) => (
          <li key={index} className="mb-4 p-4 border-b-2 flex justify-between">
            {" "}
            {/* Use index as a unique key */}
            <h3 className="font-bold text-xl">{task.task}</h3>
            <p className="text-gray-700">{task.desc}</p>
            <button  onClick = {() =>{
              deleteHandler(index)
            }}className="bg-emerald-300 rounded px-4 py-2">Delete</button>
          </li>
          
        ))}
      </ul>
    ) : (
      <h2>No tasks available</h2>
    );

  return (
    <>
      <h2 className="bg-slate-500 text-white text-center justify-between text-2xl">
        MY TODO LIST
      </h2>
      <form onSubmit={submitHandler}>
        <input
          className="border-4 p-4 m-10"
          type="text"
          placeholder="enter task here"
          onChange={showText}
          value={task}
        />
        <input
          className="border-4 p-4 m-10"
          type="text"
          placeholder="enter desc here"
          onChange={Text}
          value={desc}
        />
        <button className="rounded bg-emerald-300 p-4 m-y m-4 gap-4">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">{renderTask}</div>
    </>
  );
};

export default page;
