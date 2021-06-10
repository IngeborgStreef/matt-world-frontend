import React from "react";
import OtherUser from './OtherAccount.css';
import ProfilePicture from "../components/ProfilePicture";
import aiden from '../assets/aiden.jpg';

function OtherAccount() {
    return (
        <>
            <header className="title">
                <h1>Kies een account</h1>
            </header>
            <body className="account-container">
            <main className="choose-account">
                <ProfilePicture
                    image={aiden}
                    title="Aiden"
                />
                <ProfilePicture
                    image={aiden}
                    title="Aiden"
                />
                <ProfilePicture
                    image={aiden}
                    title="Aiden"
                />
                <ProfilePicture
                    image={aiden}
                    title="Aiden"
                />
                <ProfilePicture
                    image={aiden}
                    title="Aiden"
                />
            </main>
            </body>
        </>
    );
}

export default OtherAccount;