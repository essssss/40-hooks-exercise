import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (baseUrl) => {
    const [response, setResponse] = useState([]);

    async function addData(extension) {
        console.log(extension);
        const res = await axios.get(`${baseUrl}${extension}`);
        setResponse((response) => [...response, { ...res.data, id: uuid() }]);
    }
    // getData();
    return [response, addData];
};

export default useAxios;
