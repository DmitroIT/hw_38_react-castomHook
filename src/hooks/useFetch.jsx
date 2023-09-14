import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getData = async () => {
            setError("")
            setIsLoading(true);
            try {
                const response = await fetch(url);

                if (response.ok === false) {
                    throw new Error("Users not found")
                }

                const data = await response.json();

                setData(data)
            } catch (error) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }

        }
        getData();
    }, [url]);

  return [data, isLoading, error];
}

export default useFetch;