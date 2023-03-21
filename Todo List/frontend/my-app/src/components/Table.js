
import Card from "./Card";


const Table = ({todos}) => {

    return ( 


        <table class="w-2/3 m-auto divide-y divide-gray-200 text-sm  mt-10">
          <thead class="dark:bg-gray-100  bg-gray-800">
            <tr>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                TODO
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                CREATED AT
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                DESC.
              </th>
              <th
                class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
              >
                ACTION
              </th>
            </tr>
          </thead>


          <tbody class="">
                {todos && todos.map((todo) => (
                    <Card key={todo._id} todo={todo} />
                ))}
            </tbody>
           
          
            </table>












         
     );
}
 
export default Table;