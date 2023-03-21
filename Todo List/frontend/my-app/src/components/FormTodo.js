import { useState } from "react";
import { Link } from 'react-router-dom';


const FormTodo = () => {

    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);

   

    const handleSubmit = async (e) => {
       

        const todo = {title, desc};

        const response = await fetch('/todo',{
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json;

        if(response.ok){
            
            setTitle('')
            setDesc('')
            
            console.log('new workout added!', json);
        }
    }


    return ( 
        
        <div className="flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full h-screen">



            <div className="flex flex-col p-20 text-center  align-center justify-center">
                <h1 className="font-bold uppercase text-3xl">CREATe new todo</h1>
                <h4 className="text-sm">insert data and click the button  </h4>
            </div>







        <div class="flex justify-center align-center w-full p-6  bg-white dark:bg-gray-900 dark:text-white">

  <form className="p-10 w-1/4 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
    
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
            setTitle(e.target.value);
        }}
        value={title}/>

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
        setDesc(e.target.value);
    }}
    value={desc}
    ></textarea>
    </div>

    <Link to="/">
        <button type="button" onClick={handleSubmit} class="
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
        ease-in-out">add todo</button>
        </Link>

  </form>
</div>
</div>


     );
}
 
export default FormTodo;