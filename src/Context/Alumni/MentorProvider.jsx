import { createContext, useEffect, useState } from "react";

export const MentorContext = createContext();

const MentorProvider = ({ children }) => {
    const [mentor, setMentor] = useState(() => {
        const stored = localStorage.getItem("mentor");
        return stored ? JSON.parse(stored) : null;
    });

    useEffect(() => {
        if (mentor) {
            localStorage.setItem("mentor", JSON.stringify(mentor));
        }
    }, [mentor]);

    return (
        <MentorContext.Provider value={{ mentor, setMentor }}>
            {children}
        </MentorContext.Provider>
    );
};

export default MentorProvider;
