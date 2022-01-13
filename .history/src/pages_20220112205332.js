import React from "react";
import { Link } from "react-router-dom";

export function Home() { 
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contacts">Contacts</Link>
            </nav>
        </div>

    );
}
export function About() { 
    return (
        <div>
            <h1>[About]</h1>
        </div>

    );
}
export function Events() { 
    return (
        <div>
            <h1>[Events]</h1>
        </div>

    );
}
export function Contacts() { 
    return (
        <div>
            <h1>[Contacts]</h1>
        </div>

    );
}