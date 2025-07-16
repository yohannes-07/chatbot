import React from 'react';

const PremiumTypingAnimation = () => {
    return (
        <div className="flex items-center">
            <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-sky-400/80 rounded-full animate-pulse"
                    style={{ animationDuration: "1s", animationDelay: "0ms" }}></div>
                <div className="w-1.5 h-1.5 bg-sky-400/80 rounded-full animate-pulse"
                    style={{ animationDuration: "1s", animationDelay: "300ms" }}></div>
                <div className="w-1.5 h-1.5 bg-sky-400/80 rounded-full animate-pulse"
                    style={{ animationDuration: "1s", animationDelay: "600ms" }}></div>
            </div>
        </div>
    );
};

const SearchStages = ({ searchInfo }) => {
    if (!searchInfo || !searchInfo.stages || searchInfo.stages.length === 0) return null;

    return (
        <div className="mb-3 mt-1 relative pl-4">
            <div className="flex flex-col space-y-4 text-sm text-gray-800">
                {/* Searching */}
                {searchInfo.stages.includes('searching') && (
                    <div className="relative">
                        <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-cyan-400 rounded-full z-10 shadow-md"></div>
                        {searchInfo.stages.includes('reading') && (
                            <div className="absolute -left-[7px] top-3 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-sky-300 to-lime-200"></div>
                        )}

                        <div className="flex flex-col">
                            <span className="font-semibold mb-2 ml-2">Searching the web</span>
                            <div className="flex flex-wrap gap-2 pl-2 mt-1">
                                <div className="bg-sky-50 text-xs px-3 py-1.5 rounded border border-sky-100 inline-flex items-center">
                                    <svg className="w-3 h-3 mr-1.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    {searchInfo.query}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reading */}
                {searchInfo.stages.includes('reading') && (
                    <div className="relative">
                        <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-cyan-400 rounded-full z-10 shadow-md"></div>
                        <div className="flex flex-col">
                            <span className="font-semibold mb-2 ml-2">Reading results</span>
                            {searchInfo.urls && searchInfo.urls.length > 0 && (
                                <div className="pl-2 space-y-1">
                                    <div className="flex flex-wrap gap-2">
                                        {Array.isArray(searchInfo.urls) ? (
                                            searchInfo.urls.map((url, index) => (
                                                <div key={index} className="bg-lime-50 text-xs px-3 py-1.5 rounded border border-lime-100 truncate max-w-[200px] hover:bg-lime-100 transition duration-200">
                                                    {typeof url === 'string' ? url : JSON.stringify(url).substring(0, 30)}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="bg-lime-50 text-xs px-3 py-1.5 rounded border border-lime-100 truncate max-w-[200px]">
                                                {typeof searchInfo.urls === 'string' ? searchInfo.urls.substring(0, 30) : JSON.stringify(searchInfo.urls).substring(0, 30)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Writing */}
                {searchInfo.stages.includes('writing') && (
                    <div className="relative">
                        <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-cyan-400 rounded-full z-10 shadow-md"></div>
                        <span className="font-semibold pl-2">Writing answer</span>
                    </div>
                )}

                {/* Error */}
                {searchInfo.stages.includes('error') && (
                    <div className="relative">
                        <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-red-500 rounded-full z-10 shadow-md"></div>
                        <span className="font-semibold text-red-600">Search error</span>
                        <div className="pl-4 text-xs text-red-500 mt-1">
                            {searchInfo.error || "An error occurred during search."}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const MessageArea = ({ messages }) => {
    return (
        <div className="flex-grow overflow-y-auto bg-[#F9FBFF] border-b border-gray-100" style={{ minHeight: 0 }}>
            <div className="max-w-4xl mx-auto p-6">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-5`}>
                        <div className="flex flex-col max-w-md">
                            {!message.isUser && message.searchInfo && (
                                <SearchStages searchInfo={message.searchInfo} />
                            )}
                            <div
                                className={`rounded-lg py-3 px-5 ${message.isUser
                                    ? 'bg-gradient-to-br from-sky-500 to-indigo-500 text-white rounded-br-none shadow-md'
                                    : 'bg-lime-50 text-gray-900 border border-lime-100 rounded-bl-none shadow-sm'
                                    }`}
                            >
                                {message.isLoading ? (
                                    <PremiumTypingAnimation />
                                ) : (
                                    message.content || (
                                        <span className="text-gray-400 text-xs italic">Waiting for response...</span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageArea;
