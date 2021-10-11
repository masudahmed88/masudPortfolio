import React from 'react';

const Contactme = () => {
    return (
        <div>
            <form>
                <label for="name"> Name: </label>
                <input type="text" id="name" required></input>
                <label for="email"> Email Address: </label>
                <input type="email" id="email" required></input>
                <label for="message"> Message: </label>
                <textarea id="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contactme;
