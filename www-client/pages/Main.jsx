import React, { useState, useEffect } from "react";
import { MainStyled, UserEntriesStyled } from "./styled";

import { UserEntry, EntryForm } from "../components";
import requestService from "../utils/requestService";

const Main = props => {
    const { endpoint, ...rest } = props;

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const getEntries = async () => {
            const entries = await requestService.getRequest(
                `${endpoint}/entries`
            );
            setEntries([...entries]);
        };

        getEntries();
    }, [endpoint]);
    console.log(entries);

    const addEntry = async (e, entry) => {
        e.preventDefault();

        const newEntry = await requestService.postRequest(
            `${endpoint}/entries`,
            entry
        );
        setEntries([...entries, newEntry]);
    };

    const removeEntry = async id => {
        await requestService.deleteRequest(`${endpoint}/entries/${id}`);
        const remainingEntries = entries.filter(entry => entry._id !== id);

        setEntries([...remainingEntries]);
    };

    return (
        <MainStyled>
            <h2>User entries</h2>
            <UserEntriesStyled>
                {entries &&
                    entries.map((entry, i) => {
                        return (
                            <UserEntry
                                key={i}
                                {...entry}
                                {...props}
                                removeEntry={id => removeEntry(id)}
                            />
                        );
                    })}
            </UserEntriesStyled>

            <h2>Add an entry</h2>
            <EntryForm {...props} addEntry={(e, state) => addEntry(e, state)} />
        </MainStyled>
    );
};

export { Main };
