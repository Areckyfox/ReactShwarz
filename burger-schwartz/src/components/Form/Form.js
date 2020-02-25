import React, {useState} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Form.css';

const form = () => {
   const [formPerson, setFormPerson] = useState({
    name: "",
    surnName: "",
    email: ""
   })
   const editForm = (event) =>{
       console.log(event.target.name)
       const editedForm = {... formPerson }; 
       editedForm[event.target.name] = event.target.value;

       setFormPerson(editedForm);

   }
   return (
     <Aux>
       <label for="name">
         Labal form name
         <input
           type="text"
           name="name"
           value={formPerson.name}
           placeholder="name"
           onChange={editForm}
         />
       </label>
       <label for="surnName">
         Labal form name
         <input
           type="text"
           name="surnName"
           value={formPerson.surName}
           placeholder="surname"
           onChange={editForm}
         />
       </label>
       <label for="email">
         Labal form name
         <input
           type="email"
           name="email"
           value={formPerson.email}
           placeholder="email"
           onChange={editForm}
         />
       </label>

       <span>{JSON.stringify(formPerson)}</span>
     </Aux>
   );
}

export default form;