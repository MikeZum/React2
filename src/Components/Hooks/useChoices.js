import { useState } from "react";

export function useChoices(openItem) {
    const [choice, setChoices] = useState(openItem.choices);
    function changeChoices(e) {
        setChoices(e.target.value);
    }

    return {choice, changeChoices};
}