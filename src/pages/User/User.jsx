
import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const User = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const { userid } = useParams();

    const [data, isLoading, error] = useFetch(`https://jsonplaceholder.typicode.com/users/${userid}`)

    return (
        <div>
            <div>
                <p>User name:</p>
                {error && <p>{error}</p>}
                {isLoading && <p className="loading">Loading ...</p>}
                <h2>{data.name}</h2>
                <Link onClick={goBack}>go back</Link>
            </div>
        </div>
    )
}
export default User;

