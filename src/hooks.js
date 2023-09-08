import { useEffect, useState } from "react";

const useFlip = () => {
    const [isfacingUp, setIsFacingUp] = useState(true);

    const flipCard = () => {
        setIsFacingUp((isUp) => !isUp);
    };
    return [isfacingUp, flipCard];
};

export default useFlip;
