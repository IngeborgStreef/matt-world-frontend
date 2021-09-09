import React, {Component, useState} from 'react';
import {useForm} from "react-hook-form";

function FormAvatarUpload(props) {
    const [selectedFile, setSelectedFile] = useState(false);
    const [url, setUrl] = useState(null);
    const {handleSubmit, formState: {errors}, register} = useForm();

    function onNext(data) {
        console.log(data)
        props.updateParent(data)
        props.nextStep();
    }

    function onBack(event) {
        event.preventDefault();
        props.prevStep();
    }

    const handleImageChange = (e) => {
        let reader = new FileReader();
        let selectedFile = e.target.files[0];

        reader.onloadend = () => {
            setSelectedFile(selectedFile);
            setUrl(reader.result)
        }

        reader.readAsDataURL(selectedFile)
    }

    return (
        <div className="signup-box">
            <h1 className="form-title">Upload je Avatar</h1>
            <h4 className="subtext">En maak je account compleet!</h4>

            <form className="form-one" onSubmit={handleSubmit(onNext)}>
                <input
                    type="file"
                    onChange={handleImageChange}
                    // onChange={(e) => setSelectedFile(e.target.files[0])}
                />

                <div className="full-height">
                    {url ?
                        <img src={url} alt={"image"} className="image-upload"/> :
                        <div></div>
                    }
                </div>

                <div className="btn-box">
                    <button
                        type="button"
                        className="nav-button"
                        onClick={onBack}
                    >
                        vorige
                    </button>

                    <div className="btn-box">
                        <input
                            type="submit"
                            className="nav-button"
                            value="volgende"
                        >
                        </input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormAvatarUpload;