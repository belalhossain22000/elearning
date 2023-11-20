import { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [UniqueId, setUniqueId] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { email, password }
        try {
            const response = await fetch('https://elearning-server-852w.vercel.app/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();
            if (response.ok) {
                const { token } = data;
                localStorage.setItem('token', token);
                localStorage.setItem('email', email);
                navigate("/")
                // Store the token in localStorage or a state management tool (e.g., React Context)
                // localStorage.setItem('token', token);
            } else {
                console.error('Login failed:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col container mx-auto w-full lg:w-[60%] justify-center px-6 py-12 lg:px-8">
                <h1 className='text-4xl font-semibold text-center my-12'>Please login here</h1>
                {/* ... (existing UI code) */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        {/* Email input */}
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                    </div>
                    <div>
                        {/* Password input */}
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                    </div>
                    <div>
                        {/* Unique ID input */}
                        <label htmlFor="Id" className="block text-sm font-medium leading-6 text-gray-900">
                            Unique Id
                        </label>
                        <div className="mt-2">
                            <input
                                id="Id"
                                name="Id"
                                type="Id"
                                autoComplete="Id"
                                onChange={(e) => setUniqueId(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                            />
                        </div>
                    </div>
                    <div>
                        {/* Submit button */}
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Don`t have an account?
                    <Link to="/sign-up" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                    </Link>

                </p>
                <p className="mt-5 text-center text-sm text-gray-500">
                    Go to home?
                    <Link to="/first-page" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Home
                    </Link>

                </p>
            </div>
        </>
    );
};

export default Login;
