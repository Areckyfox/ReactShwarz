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
       const editedForm = {...formPerson }; 
       editedForm[event.target.name] = event.target.value;

       setFormPerson(editedForm);

   }
   return (
     <Aux>
      
       <input
         className={classes.myForm}
         type="text"
         name="name"
         value={formPerson.name}
         placeholder="name"
         onChange={editForm}
       />
       <input
         className={classes.myForm}
         type="text"
         name="surnName"
         value={formPerson.surName}
         placeholder="surname"
         onChange={editForm}
       />
       <input
         className={classes.myForm}
         type="email"
         name="email"
         value={formPerson.email}
         placeholder="email"
         onChange={editForm}
       />
       <div>{formPerson.name}</div>
       <div>{formPerson.surnName}</div>
       <div>{formPerson.email}</div>
       <hr/>
     </Aux>
   );
}

export default form;