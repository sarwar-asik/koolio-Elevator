import { CSSProperties } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function UpArrowButton({ style }: { style:  CSSProperties }) {
    return (
        <div><FaArrowUp className="arrow-button" style={style} /></div>
    )
}
