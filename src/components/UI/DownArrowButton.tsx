/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSSProperties } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function DownArrowButton({ style }: { style: CSSProperties }) {
    return (
        <div ><FaArrowDown className="arrow-button" style={style} /></div>
    )
}
