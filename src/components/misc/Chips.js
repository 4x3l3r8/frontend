import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const classNames = (photoURL, ico) => [photoURL ? 'ml-2' : 'ml-4', ico ? 'mr-2' : 'mr-4']

/**
 * 
 * @param {photoURL?} param0 
 * @param {ico?} param0 svg or Ico
 * @param {children} param0 React Children
 * @returns JSX element Chips
 */
function Chip({ photoURL = '', ico = false, onClickFull, onClickIco, children, className }) {
    return (
        <div onclick={onClickFull} className='flex justify-center items-center m-1 font-medium py-1 px-2 cursor-pointer hover:bg-primary-500 bg-white rounded-full text-indigo-100 bg-indigo-700 border border-indigo-700'>
            {photoURL && (
                <div slot="avatar" className="flex relative w-4 h-4 bg-orange-500 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full ">
                    <img
                        src={photoURL}
                        alt=""
                        className="w-8 h-8 bg-grey-light rounded-full overflow-hidden"
                    />
                </div>
            )}
            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                <div className={classNames}>
                    {children}
                </div>
            </div>

            {ico && (
                <div className="flex flex-auto flex-row-reverse">
                    <button
                        onClick={onClickIco}
                        className="bg-blue-lighter hover:bg-blue-900 rounded-full w-6 h-6 mr-1 text-blue flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-x cursor-pointer hover:bg-indigo-900 rounded-full w-4 h-4 ml-2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Chip