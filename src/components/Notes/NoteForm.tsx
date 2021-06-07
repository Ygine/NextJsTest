import React from 'react';

const NoteForm = ({onSubmit, actionType, activeNote}) => {
    const [formDate, setFormDate] = React.useState({
      title: activeNote?.title ? activeNote.title : "",
      text: activeNote?.text ? activeNote.text : ""
    });

    return (
      <form className="">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Title
          </label>
          <input
            value={formDate.title}
            onChange={(e) => setFormDate(prev => ({...prev, title: e.target.value}))}
            className="shadow text-base appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
            Text
          </label>
          <input
            value={formDate.text}
            onChange={(e) => setFormDate(prev => ({...prev, text: e.target.value}))}
            className="shadow text-base appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="text" type="text" placeholder="Add yours text"/>
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => onSubmit(formDate)}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Submit
          </button>
        </div>
      </form>
    )
};

export default NoteForm;
