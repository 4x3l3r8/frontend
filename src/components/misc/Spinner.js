import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`display: block; margin: 0 auto; border-color: blue; `;

/**
 * 
 * @param boolean param0 show
 * @returns jsx element
 */
function Loader({ show }) {
    // let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");

    return (
        <div className="sweet-loading">
            {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
            {/* <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

            <ClipLoader color={`#23346f`} loading={show} css={override} size={150} />
        </div>
    );
}

export default Loader;