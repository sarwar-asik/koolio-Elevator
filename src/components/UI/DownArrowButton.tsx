/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaArrowDown } from "react-icons/fa";

export default function DownArrowButton({ style }: { style: any }) {
    return (
        <div ><FaArrowDown className="arrow-button" style={style} /></div>
    )
}
