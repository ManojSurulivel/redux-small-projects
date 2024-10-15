import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, editNote, deleteNote } from '../redux/slices/NotesSlice';

function NoteApp() {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const inputRef = useRef("")
  
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (input.trim()) {
      dispatch(addNote(input)); // Dispatch action to add note
      setInput('');
      inputRef.current.focus();
    }
  };

  const handleEditNote = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdateNote = () => {
    if (editText.trim()) {
      dispatch(editNote({ id: editId, newText: editText }));
      setEditId(null); // Clear edit mode
      setEditText('');
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1>9. Note-Taking App with CRUD operation</h1>
      
      <form onSubmit={(e) => e.preventDefault()}>      
      <input
        style={{margin:"10px 0",padding:"5px"}}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
        placeholder="Add a new note"
      />
      <button style={{marginLeft:"10px ",padding:"5px 10px"}} onClick={handleAddNote}>Add Note</button>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {editId === note.id ? (
              <>
                <input
                  style={{margin:"10px 0",padding:"5px"}}
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button style={{marginLeft:"10px ",padding:"5px 10px"}} onClick={handleUpdateNote}>Update</button>
              </>
            ) : (
              <>
                <p style={{margin:"20px",padding:"10px"}}>{note.text}</p>
                <button style={{marginLeft:"10px ",padding:"5px 10px"}} onClick={() => handleEditNote(note.id, note.text)}>Edit</button>
                <button style={{marginLeft:"10px ",padding:"5px 10px"}} onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      </form>

    </div>
  );
}

export default NoteApp;
