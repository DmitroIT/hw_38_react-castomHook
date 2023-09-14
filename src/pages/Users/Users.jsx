// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const Users = () => {

    const [data, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/users")

    return (
        <div>
            <h1>Users</h1>
            {error && <p>{error}</p>}
            {isLoading && <p className="loading">Loading ...</p>}
            <ul>
                {data.length > 0 && data.map((users) => {
                    return (
                        <li key={users.id}>
                            <span>{users.name}</span>
                            <Link to={`${users.id}`}><button>more...</button></Link>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users;
