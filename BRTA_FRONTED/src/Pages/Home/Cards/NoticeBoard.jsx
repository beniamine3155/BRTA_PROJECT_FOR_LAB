import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'

const NoticeBoard = ({ notices }) => {
    return (
        <div className="card w-full bg-gradient-to-r from-zinc-600 via-gray-900 to-zinc-500 p-7 shadow-md border border-gray-300 rounded-md text-white">
            <div className="card-body">
                <h2 className="card-title mb-5">Notice Board</h2>
                {/* Render each notice dynamically */}
                {notices.map((notice) => (
                    <div key={notice.id}>
                        <div className='flex items-center gap-2 cursor-pointer hover:text-gray-300 text-gray-200'>
                            <PlayIcon className="h-4 w-4 text-green-500" />
                            <p>{notice.content.split(' ').slice(0, 19).join(' ')}... </p>
                        </div>
                        <div className="divider h-1"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeBoard;
