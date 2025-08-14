import React, { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<string[]>([])

  const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const inputChip = e.target.value;
    setInput(inputChip);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>)=> {
    if(e.key==="Enter"){
      e.preventDefault();
      const trimmed = input.trim();
      if(trimmed){
        setChips((prev)=>[...prev, trimmed]);
        setInput("");
      }
    }
  }

  const removeChip =(index: number) => {
    setChips((prev)=> prev.filter((_, i)=> i !== index));
  }

return (
  <div className="min-h-screen flex items-center justify-center flex-col bg-gray-50 p-4">
    {/* Header */}
    <h2 className="mb-4 text-2xl font-bold">Chips Input</h2>

    {/* Input box */}
    <div className="w-full max-w-md border border-gray-300 rounded-lg p-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a chip"
        className="border-none outline-none p-2 w-full text-sm"
      />
    </div>

    {/* Chips container */}
    <div className="flex flex-wrap gap-2 max-w-md">
      {chips.map((chip, index) => (
        <div
          key={`${chip}-${index}`}
          className="flex items-center bg-gray-200 rounded-full px-3 py-1"
        >
          <span className="text-gray-800">{chip}</span>
          <button
            type="button"
            onClick={() => removeChip(index)}
            className="ml-2 text-gray-600 hover:text-red-600 font-bold"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  </div>
);

}

export default App
