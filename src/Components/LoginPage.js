import { useNavigate } from "react-router-dom";




function LoginPage(){

    const navigate = useNavigate();

    function submitHandler(){
        navigate('/');
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center
         bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

            <form onSubmit={submitHandler} className="w-1/3 border-2 border-black flex flex-col p-5 bg-yellow-200 rounded-md gap-5">
                <div className="font-bold tracking-wider text-center w-full text-xl">Customer Login</div>
                <div>
                    <p className="font-semibold">E-mail Address</p>
                    <input type="email" placeholder="Enter your register e-mail address" required
                        className="border-2 shadow-md shadow-gray-700 w-full h-10 p-3"></input>
                </div>
                <div>
                    <p className="font-semibold">Password</p>
                    <input type="password" placeholder="Enter your password" required
                        className="border-2 shadow-md shadow-gray-700 w-full h-10 p-3"></input>
                </div>
                <button className="bg-blue-600 w-full rounded-full
                 hover:bg-blue-700 font-bold text-white p-2 text-xl mt-4">Login</button>
            </form>

        </div>
    )
}

export default LoginPage;