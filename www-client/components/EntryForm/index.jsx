import React, { useState } from "react";

import { EntryFormStyled } from "./styled";

const EntryForm = ({ addEntry }) => {
    const [formData, setFormData] = useState({
        name: "",
        youtubeId: "",
        comment: "",
        response: ""
    });

    const handleChange = e => {
        const inputName = e.target.getAttribute("name");

        setFormData({
            ...formData,
            [inputName]: e.target.value
        });
    };

    return (
        <EntryFormStyled name={`entry-form`}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={e => handleChange(e)}
            />

            <label htmlFor="youtubeId">Youtube video ID</label>
            <input
                type="text"
                name="youtubeId"
                value={formData.youtubeId}
                onChange={e => handleChange(e)}
            />

            <label htmlFor="comment">Comment</label>
            <input
                type="textarea"
                name="comment"
                value={formData.comment}
                onChange={e => handleChange(e)}
            />

            <button onClick={e => addEntry(e, formData)}>Add</button>

            {/* <span class="entry-form__response">{this.state.response}</span> */}
        </EntryFormStyled>
    );
};

export { EntryForm };
