import { ReactNode } from "react";

interface LevelButtonProps {
    children: ReactNode;
}

export default function LevelButton({ children }: LevelButtonProps) {
    return (
        <button className="elevator-button">{children}</button>
    );
}
