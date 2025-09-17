import { useState, useEffect } from "react";

export default function NotesManager() {
    const [note, setNote] = useState('');
    const [savedNote, setSavedNote] = useState('');

    useEffect(() => {
      const fetchNote = async () => {
        try {
          const res = await fetch("http://localhost:4000/api/note")
          const data = await res.json()
          setNote(data.note);
        } catch (err) {
          console.log('Error Fetching notes', err);
        }
      }
      fetchNote();
    },[]);
    
  
    const saveNote = async () => {
      try {
        await fetch("http://localhost:4000/api/note", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ note }),
        });
        setSavedNote(note);
      } catch (err) {
        console.error("Error saving note:", err);
      }
    };
    const clearNote = async () => {
      setNote('');
      try {
        await fetch("http://localhost:4000/api/note", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({ note : ""})
        })
      } catch (err) {
        console.log('Error Clearing notes', err);
      }
    };
  
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Notes Manager</h2>
        <textarea 
          className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="mt-4 p-3 border rounded-lg bg-gray-100">
  <h3 className="font-bold">Saved Note:</h3>
  <p>{savedNote}</p>
  </div>
        <div className="flex space-x-2 mt-4">
          <button 
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors flex-1"
            onClick={saveNote}
          >
            Save Note
          </button>
          <button 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors flex-1"
            onClick={clearNote}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }