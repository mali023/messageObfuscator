import React from 'react';
import './../App.css';

//Get current year to display in footer
function getYear() {
        let today = new Date()
        let year = today.getFullYear()
    return(year)
}

function Footer(props) {
    return (
        <>
            <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" />
            </svg>
            <footer>
                <div>
                    <p>Muhammed Ali | &copy; {getYear()}</p>
                </div>
            </footer>
        </>

    )
}

export default Footer;