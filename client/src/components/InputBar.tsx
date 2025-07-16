import { useState } from "react"

const InputBar = ({ currentMessage, setCurrentMessage, onSubmit }) => {

    const handleChange = (e) => {
        setCurrentMessage(e.target.value)
    }

    return (
        <form onSubmit={onSubmit} className="p-4 bg-white">
            <div className="flex items-center bg-[#F0F7FF] rounded-full p-3 shadow-md border border-sky-100">
                <button
                    type="button"
                    className="p-2 rounded-full text-sky-500 hover:text-sky-700 hover:bg-sky-100 transition-all duration-200"
                >
                    {/* Optional left icon goes here */}
                </button>
                <input
                    type="text"
                    placeholder="Type a message"
                    value={currentMessage}
                    onChange={handleChange}
                    className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
                />
                <button
                    type="button"
                    className="p-2 text-sky-500 hover:text-sky-700 hover:bg-sky-100 rounded-full transition-all duration-200"
                >
                    {/* Optional right icon goes here */}
                </button>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 rounded-full p-3 ml-2 shadow-lg transition-all duration-200 group"
                >
                    <svg
                        className="w-6 h-6 text-white transform rotate-45 group-hover:scale-110 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default InputBar
