import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Modal = ({todo}) => {
    const [title, setTitle] = useState(todo.title);
    const [desc, setDesc] = useState(todo.desc);
    

    const handlePatch = async (e) => {
        const todos = {title, desc};

        const response = await fetch('/todo/' + todo._id, {
            method: 'PATCH',
            body: JSON.stringify(todos),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = response.json();

        if(response.ok){
            console.log('ysyesyesyeysyeysyeysye');
            window.location.reload();
        }




    }

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className=" px-5 text-red-700 hover:text-white border border-red-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-yellow-900"
        type="button"
        onClick={() => !showModal ? setShowModal(true) : setShowModal(false)}>
        Edit
      </button>




      {showModal ? (
        <>
          

          <form className="overflow-y-auto overflow-x-hidden fixed place-self-center top-1/2 right-1/2 left-0 z-50  p-10 w-1/4 rounded-lg bg-white dark:bg-gray-800 shadow-lg md:inset-0 h-modal md:h-full">


                <div class="flex justify-between items-start p-4 rounded-t border-b-white dark:border-gray-600 transition">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Edit TODO Here
                        </h3>
                        <button type="button" onClick={() => setShowModal(false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
    
    <div class=" form-group mb-6">
      <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Add Title Here " 
        onChange={(e) => {
            setTitle(e.target.value)
        }}
        value={title}
        
        />

    </div>
    <div class="form-group mb-6">
      <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Add Description Here"
      onChange={(e) => {
        setDesc(e.target.value)
    }}
    value={desc}
    
    ></textarea>
    </div>


    <div className="flex flex-col">
    
        <button type="button"  class="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out" onClick={handlePatch}>add todo</button>
       

        <button type="button"  class="
        w-full
        px-6
        py-2.5
        bg-black
        my-5
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-gray-700 hover:shadow-lg
        focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-gray-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
        onClick={() => setShowModal(false)}>CLOSE</button>

    </div>
   
    </form>




          
        </>
      ) : null}
    </>
  );
};

export default Modal;