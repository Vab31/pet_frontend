import React, { useState, FormEvent, ChangeEvent } from 'react';
import Axios from 'axios';

function AddData() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");

  const titleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const linkUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const descUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit is running");
    const userObject = {
      title: title,
      url: link,
      price: desc
    };

    Axios.post('http://localhost:3002/data', userObject)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });
    window.alert("Data Added Successfully;");
  };

  return (
    <>
    <p>Dashboard</p>
    <form className='mt-5' onSubmit={handleSubmit} >
      <div className="mb-3 m-5">
        <label htmlFor="title"  className='p-2 m-3'>Title</label>
        <input type="text" id="title" placeholder="Enter Title" value={title} onChange={titleUpdate} />
      </div>
      <div className="mb-3 m-5">
        <label htmlFor="link" className='p-2 m-3'>Link</label>
        <input type="text" id="link" placeholder="Link" value={link} onChange={linkUpdate} />
      </div>
      <div className="mb-3 m-5">
        <label htmlFor="price" className='p-2 m-3'>Price</label>
        <input type="text" id="price" placeholder="Description" value={desc} onChange={descUpdate} />
      </div>
      <button type="submit " className='m-2 p-3 rounded bg-orange-600 text-white'>Add</button>
    </form>
    </>
  );
}

export default AddData;
