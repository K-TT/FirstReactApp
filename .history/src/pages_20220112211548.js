import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() { 
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link><br/>
                <Link to="events">Events</Link><br/>
                <Link to="contact">Contacts</Link>
            </nav>
        </div>

    );
}
export function About() { 
    return (
        <div>
            <h1>[About]</h1>
            <Link to="/">Home</Link><br/>
            <Link to="services">Services</Link><br/>
            <Link to="history">Company History</Link><br/>
            <Link to="location">Location</Link>
            <Outlet/>
        </div>

    );
}
export function Services() { 
    return (
        <div>
            <h2>Our Services</h2>
            <Link to="about">About</Link>
        </div>
    );
}

export function CompanyHistory() { 
    return (
        <div>
            <h2>Our Company History</h2>
            <Link to="about">About</Link>
        </div>
    );
}

export function Location() { 
    return (
        <div>
            <h2>Our Location</h2>
            <Link to="about">About</Link>
        </div>
    );
}
export function Events() { 
    return (
        <div>
            <h1>[Events]</h1>
            <Link to="/">Home</Link>
        </div>

    );
}
export function Contacts() { 
    return (
        <div>
            <h1>[Contacts]</h1>
            <Link to="/">Home</Link>
        </div>

    );
}
export function Whoops404() { 
    let location = useLocation();
    return (
        <div>
            <h1>Resource not found at {location.pathname}!</h1>
            <Link to="/">Home</Link>
        </div>

    );
}