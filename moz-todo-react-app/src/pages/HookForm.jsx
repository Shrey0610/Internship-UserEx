// import { useForm, } from "react-hook-form"
// import { zodResolver } from '@hookform/resolvers/zod';
// import '/src/css/form.css';
// import {z} from 'zod'; //for validation

// const schema = z.object({
//     name: z.string(),
//     email: z.string().email(), //validation for email.
//     password: z.string().min(6)
// });  //this schema has a lot of validation and can be used by joining with the forms.

// export default function HookForm() {
//     const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
//         defaultValues: async()=>{
//             // email:'test@example.com',
//             // password: 'password'
//             const randomnum = Math.floor(Math.random() * 10) + 1;

//             const response= await fetch(`https://jsonplaceholder.typicode.com/users/${randomnum}`);

//             const data= await response.json();

//             return {
//                 name: data.name,
//                 email: data.email
//             }
//         },
//         resolver: zodResolver(schema), //connects the schema to the form
//     });  
    
//     //setError, clearErrors, setValue, getValues, trigger, control, handleSubmit, watch, formState: { errors, isDirty, isSubmitted, isSubmitting, isValid, submitCount }

//     // const onSubmit = async(data) => {
//     //     try{
//     //         await new Promise((resolve) => setTimeout(resolve, 1000));
//     //         console.log(data);
//     //         throw new Error();
//     //     }catch{
//     //         setError("root",{
//     //             message: 'This email is already taken' 
//     //         })
//     //     }
//     // }

//     const onSubmit = async(data) => {
//         await new Promise(resolve  => setTimeout(resolve, 1000));

//         console.log(data);}
    
//     const visible = () => {
//         if (document.getElementsByTagName('input')[2].type === 'password') {
//             document.getElementsByTagName('input')[2].type = 'text';
//         }
//         else {
//             document.getElementsByTagName('input')[2].type = 'password';
//         }
//     }
    
//     return (
//         <form className="form" onSubmit={handleSubmit(onSubmit)}>
//             {/* <input {...register("email", {
//                 required: 'Email is required',
//                 validate: (value)=>{
//                     if(!value.includes('@')){
//                         return 'Email is invalid';}
//                     return true;
//                 }
//             })} type="text" placeholder="Email" style={{marginBottom: '0px'}} /> */}

// <input {...register("name")} type="text" placeholder="Name" style={{marginBottom: '20px'}} />

// {errors.name && <div style={{color: 'red', margin: '0px'}}>
//    {errors.email.message}
// </div>}
    
//     <input {...register("email")} type="text" placeholder="Email" style={{marginBottom: '0px'}} />

//             {errors.email && <div style={{color: 'red', margin: '0px'}}>
//                {errors.email.message}
//             </div>}
//             <div className="input-container" style={{marginBottom: '0px'}}>

//          {/* <input {...register("password", {
//                 required: 'Password is required',
//                 minLength:{
//                     value: 6,
//                     message: 'Password must be at least 6 characters'
//                 }
//             })} style={{marginBottom: '0px'}} type='password' placeholder="Password" /> */}

// <input {...register("password")} style={{marginBottom: '0px'}} type='password' placeholder="Password" />

            
//             <button type="button" onClick={visible} className="toggle-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 toggle-icon" style={{marginBottom: '0px'}}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//             </svg>
//             </button>
//             </div>
//             {errors.password && <div style={{color: 'red', margin: '0px', paddingBottom: '25px', paddingTop: '0px'}}>
//                 {errors.password.message}
//             </div>}

//             {/* {errors.root && <div style={{color: 'red', margin: '0px'}}>
//                {errors.root.message}
//             </div>} */}
//             <button type="submit" style={{marginTop: '0px'}} disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Submit'}</button>
//         </form>

//     )
// }

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import "/src/css/form.css";

// // Validation Schema
// const schema = z.object({
//     name: z.string().min(1, "Name is required"),
//     email: z.string().email("Invalid email format"),
//     password: z.string().min(6, "Password must be at least 6 characters")
// });

// export default function HookForm() {
//     const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
//         resolver: zodResolver(schema),
//     });

//     const [rowData, setRowData] = useState([]); // Stores form submissions for AG Grid

//     // Handle form submission
//     const onSubmit = async (data) => {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         setRowData(prevData => [...prevData, data]); // Add form data to grid
//         reset(); // Reset form fields
//     };

//     const [columnDefs] = useState([
//         { field: "name", headerName: "Name", sortable: true, filter: true, resizable: true },
//         { field: "email", headerName: "Email", sortable: true, filter: true, resizable: true },
//         { field: "password", headerName: "Password", sortable: false, filter: false, resizable: true }
//     ]);

//     const togglePassword = () => {
//         const passwordInput = document.getElementById("password");
//         passwordInput.type = passwordInput.type === "password" ? "text" : "password";
//     };

//     return (
//         <div style={{ width: "100%", padding: "20px" }}>
//             {/* Form Section */}
//             <form className="form" onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("name")} type="text" placeholder="Name" />
//                 {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}

//                 <input {...register("email")} type="text" placeholder="Email" />
//                 {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}

//                 <div className="input-container">
//                     <input {...register("password")} id="password" type="password" placeholder="Password" />
//                     <button type="button" onClick={togglePassword} className="toggle-button">
//                         👁
//                     </button>
//                 </div>
//                 {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}

//                 <button type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? 'Loading...' : 'Submit'}
//                 </button>
//             </form>

//             {/* Grid Section */}
//             <div className="ag-theme-alpine" style={{ height: "300px", width: "100%", marginTop: "20px" }}>
//                 <AgGridReact
//                     rowData={rowData}
//                     columnDefs={columnDefs}
//                     pagination={true}
//                     domLayout="autoHeight"
//                 />
//             </div>
//         </div>
//     );
// }


import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AgGridReact } from "ag-grid-react";
import ROWDATA from "../data/data"; // Import predefined data

import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "/src/css/form.css";
import "/src/css/grid.css";

// Validation Schema
const schema = z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    phoneNumbers: z.array(z.number().min(1, "Phone number is required")).min(2, "At least two phone numbers are required"),
});

export default function HookForm() {
  const { register, watch, getValues, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
        name: "John Doe",
        username: "Shrey",
        email: "admin@example.com",
        password: "1111111",
        phoneNumbers: [11,22],
    },
    mode: 'all',
  });

console.log({isDirty, isValid});
  // console.log({touchedFields, dirtyFields});

  const gridRef = useRef();
  const [rowData, setRowData] = useState([...ROWDATA]); // Combine predefined & form data

  // Handle form submission
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRowData((prevData) => [...prevData, data]); // Append form data to grid
    // console.log(data);
  };

  const handleGetValues= async()=>{
    await new Promise((resolve) => setTimeout(resolve, 1000));
     console.log('Got Password:', getValues('password'));
  }
              //Throw an error if the user clicks on the 'Reset Values' button only after the form has been submitted:
              // const handleSetValues = () => {
              //   if (isSubmitting) {
              //     throw new Error("Cannot reset values while submitting form");
              //   }
              //   setValue("name", "", {
              //     shouldValidate: true,
              //     shouldDirty: true,
              //     shouldTouch: true,
              //   });
              //   setValue("password", "", {
              //     shouldValidate: true,
              //     shouldDirty: true,
              //     shouldTouch: true,
              //   });
              //   setValue("email", "", {
              //     shouldValidate: true,
              //     shouldDirty: true,
              //     shouldTouch: true,
              //   });
              //   setValue("username", "", {
              //     shouldValidate: true,
              //     shouldDirty: true,
              //     shouldTouch: true,
              //   });
              //   setValue("phoneNumbers[0]", "", {
              //     shouldValidate: true,
              //     shouldDirty: true,
              //     shouldTouch: true,
              //   });
              //   setValue("phoneNumbers[1]", "", {
              //     shouldValidate: true,
              //     shouldDirty: true,
              //     shouldTouch: true,
              //   });
              // }
              
  // Column Definitions
  const columnDefs = [
    { field: "id", headerName: "ID", checkboxSelection: true, sortable: true, resizable: true, Selection: true, editable: true, },
    { field: "name", headerName: "Name", sortable: true, filter: true, resizable: true, Selection: true, editable: true, },
    { field: "username", headerName: "Username", sortable: true, filter: true, resizable: true, Selection: true, editable: true, },
    { field: "email", headerName: "Email", sortable: true, filter: true, resizable: true, Selection: true, editable: true, },
    { field: "phone", headerName: "Phone", sortable: true, filter: true, resizable: true, Selection: true, editable: true, },
    { field: "website", headerName: "Website", sortable: true, filter: true, resizable: true, Selection: true, editable: true, },
    { field: "password", headerName: "Password", sortable: false, filter: false, resizable: true, Selection: true, editable: true, }
  ];

  // Toggle password visibility
  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  };

  const watchName = watch("name");
//   const watchForm = watch();

//   useEffect(()=>{
//     const subscription= watch((value)=>{console.log(value)});
//     return ()=>subscription.unsubscribe();
//   }, [watch])

  return (
    <div style={{ width: "100%", padding: "20px" }}>
        <h2>Welcome {watchName}!</h2>
      {/* Form Section */}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} type="text" placeholder="Name" />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <input {...register("username")} type="text" placeholder="Username" />
        {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}

        <input {...register("email")} type="text" placeholder="Email" />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <input {...register("phoneNumbers[0]")} type="number" id='pr-phone' placeholder="P Phone" />
        {errors.phoneNumbers && <p style={{ color: "red" }}>{errors.phoneNumbers.message}</p>}

        <input {...register("phoneNumbers[1]",{valueAsNumber: true})} type="number" id= 'sec-phone' placeholder="S Phone" />
        {errors.phoneNumbers && <p style={{ color: "red" }}>{errors.phoneNumbers.message}</p>}

        <div className="input-container">
          <input {...register("password")} id="password" type="password" placeholder="Password" />
          <button type="button" onClick={togglePassword} className="toggle-button">
            👁
          </button>
        </div>
        {errors.password && <div style={{ color: "red" }}>{errors.password.message}</div>}

        <button type="submit" disabled={isSubmitting || !isDirty}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        <button type="button" onClick={handleGetValues}>Get Values</button>
        <button type="button" onClick={()=>reset()}>Reset Values</button>
        
      </form>

      {/* Grid Section */}
      <div className="ag-theme-alpine-dark grid" style={{ height: 300, width: "100%", marginTop: "20px" }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          domLayout="autoHeight"
        paginationPageSize={10}
        />
      </div>
    </div>
  );
}
