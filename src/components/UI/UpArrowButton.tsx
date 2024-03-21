/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaArrowUp } from "react-icons/fa";

export default function UpArrowButton({ style }: { style: any }) {
    return (
        <div><FaArrowUp className="arrow-button" style={style} /></div>
    )
}
