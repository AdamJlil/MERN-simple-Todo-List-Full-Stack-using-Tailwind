import Table from "../components/Table";
import Notodos from "../components/Notodos";
import { useEffect, useState } from "react";


const Home = () => {

    const [todos, setTodos] = useState(null);

    useEffect(() =>  {
        
        const fetchTodos = async () => {
            
            const response = await fetch('/todo');
            
            const json = await response.json();
            console.log('lol');

            if(response.ok){
                setTodos(json);
                console.log(json);
            }
            if(response == null){
                console.log("NOPE");
            }
        } 

        fetchTodos();
    },[])

    if(todos != null){
        return ( 
            
            <div className="home w-full h-screen text-gray-600 bg-white dark:bg-gray-900 dark:text-gray-100 flex justify-center align-center flex-col">

                    <div class="text-center  text-gray-800  dark:text-gray-100 mt-10">
                        <h1 class="text-5xl font-bold mt-0 mb-6">TODO Welcomes You!</h1>
                        <h3 class="text-3xl font-bold mb-8">Feel free to add TODOS here.</h3>
                       
                    </div>
                    
                    
                    <div className=" border-0 rounded-lg rounded-md">
                    <Table todos={todos} />
                    </div>
                        
                       
    
                  
    
    
    
            </div>
        
         );
    }
    else{
        return ( 
            <div className="home w-full h-screen text-gray-600 bg-white dark:bg-gray-900 dark:text-gray-100 flex justify-center">
                
                    
                    
                    <div class="overflow-x-auto">
                        
                        <Notodos />
    
                    </div>
    
    
    
       
            </div>
        
         );
    }
    
}
 
export default Home;    