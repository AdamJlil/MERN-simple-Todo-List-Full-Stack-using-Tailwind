
import { useEffect } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "./Modal";  

const Card = ({todo}) => {

    const timeC = todo.createdAt.substring(0,10);

    const handleSubmit = async () => {
        const response = await fetch('/todo/' + todo._id, {
            method: 'DELETE'
        });

        const json = response.json();

        if(response.ok){
            window.location.reload();

        }
        else{

        }
    }

    return ( 

      
       
      
          
            <tr>
              <td className="whitespace-nowrap px-2 py-2 font-medium font-bold text-gray-900 dark:text-gray-100">
                {todo.title}
              </td>
              <td className="whitespace-nowrap px-2 py-2 text-gray-900 dark:text-gray-100 italic">{timeC}</td>
              <td className="whitespace-normal w-auto px-4 py-2 text-gray-900 dark:text-gray-100">{todo.desc}</td>
              <td className="whitespace-nowrap px-2 py-2 text-gray-900 dark:text-gray-100">
              <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={handleSubmit}>Delete</button>
             
           <Modal key={todo._id} todo={todo}/>
              
              </td>

              
            
            </tr>
      
      
          
        
      

   


     );
}
 
export default Card;