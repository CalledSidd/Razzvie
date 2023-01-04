import React from "react";

const NewPost = () => {
  return (
    <>
      <div className="flex w-4/5 ml-48">
        <div className="w-full h-full content-center">
          <div className="flex justify-evenly items-center bg-black w-3/5 h-screen max-h-[500px] mt-32 ml-60">
          <input type="file" className="h-7 w-28 rounded-lg"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
