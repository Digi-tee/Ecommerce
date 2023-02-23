import axios from "axios"



const User = () => {
    const [User, setUser] = useState([])

    useEffect (() => {
        getUser();
    }, []);

    const getUser = () =>{
        axios.get("https://randomuser.me/api/")
        .then(response => {
            setUser(response.results)
            console.log(results)
        })
    }

    return (
        <div>
            <article className='mt-5 text-center'>
                <h1>Products</h1>
                <p>Order it for you or for your beloved ones</p>
            </article>
            <div className="row">
                {randomUser.map((User) => {
                    return  (
                        <div key={User.id} className="col-md-3 my-3">
                            <div className="card shadow border-0" style={{ backgroundColor: "#F7F8FA" }}>
                                <img src={User.img} className="card-img-top img-fluid" />
                                <div className="card-body bg-white">
                                    <h5 className="card-title">{User.man}</h5>
                                    <p className="card-text text-success">{User.age}</p>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}