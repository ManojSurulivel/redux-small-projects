// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateField, submitForm, resetForm } from '../redux/slices/FormSlice';

// const FormComponent = () => {
//   const dispatch = useDispatch();
//   const { name, email, password, submitted } = useSelector((state) => state.form);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateField({ field: name, value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(submitForm());
//   };

//   const handleReset = () => {
//     dispatch(resetForm());
//   };

//   return (
//     <div className='form' >
//       <form  onSubmit={handleSubmit}>
//         <h1>10. Form Valitation</h1>
//         <div>
//           <label className='form-label'> Name: </label>
//           <input
//             className='form-input'
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             placeholder='Enter name'
//             required
//           />
//         </div>
//         <div>
//           <label> Email: </label>
//           <input
//             className='form-input'
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             placeholder='Enter email'
//             required
//           />
//         </div>
//         <div>
//           <label> Password: </label>
//           <input
//             className='form-input'
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             placeholder='Enter password'
//             required
//           />
//         </div>
//         <div>
//         <button className="btn-note-add" type="submit">Submit</button>
//         <button className="btn-note-edit" type="button" onClick={handleReset}>Reset</button>
//         </div>
//       </form>

//       {submitted && (
//        {submitted.map((index,name,email,password) => {
//         <ul>
//             <li key={index}>
        
//           <h2>Form Submitted</h2>
//           <p>Name: {name}</p>
//           <p>Email: {email}</p>
//           <p>Password: {password}</p>
       
//             </li>
//         </ul>
//            })}
//       )}
//     </div>
//   );
// };

// export default FormComponent;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEntry, resetForm } from '../redux/slices/FormSlice';

const FormComponent = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.form.entries);  // Get all entries from Redux
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Dispatch the form data as an entry
      dispatch(addEntry({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
         <h1>10. Form Valitation</h1>
        <div>
          <label>Name:</label>
          <input
           className='form-input'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
           className='form-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className='form-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            required
          />
        </div>
        <button className="btn-note-add" type="submit">Submit</button>
        <button className="btn-note-edit" type="button" onClick={() => dispatch(resetForm())}>Reset</button>
      </form>

      {entries.length > 0 && (
        <div>
          <h2>Form Submissions</h2>
          <ol>
            {entries.map((entry, index) => (
              <li key={index}>
                <p>Name: {entry.name}</p>
                <p>Email: {entry.email}</p>
                <p>Password: {entry.password}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default FormComponent;

