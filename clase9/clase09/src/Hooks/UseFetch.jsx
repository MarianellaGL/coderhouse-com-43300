import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setData(res);
                setLoading(false)
            })
            .catch(err => setError(err))
    }, [url])

    return { data, loading, error }
}

export default useFetch;