import React, { useReducer} from "react";

export function Checkbox() { 
    const [checked, toggle] = useReducer
        ((checked) => !checked,
            false);
    return (
        <>
            <label>{checked ? "checked" : "not checked"}</label>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
        </>
    );
}