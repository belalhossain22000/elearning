import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal';
import { DataContext } from '../../provider/ContextProvider/ContextProvider';

const Register = () => {
    const [step, setStep] = useState(1); // Track the current step

    // Form field states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [language, setLanguage] = useState('');
    const [country, setCountry] = useState('');
    const [whatsAppNumber, setWhatsAppNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const navigate = useNavigate()
    const { setRegInfo } = useContext(DataContext)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            language,
            country,
            whatsAppNumber,
            phoneNumber,
            email,
            password,
            referenceNumber
        };
        try {
            const response = await fetch('http://localhost:3000/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                // Registration successful
                const data = await response.json();
                setRegInfo(data)
                console.log(data)
                navigate("/sign-up-details")


            } else {
                // Registration failed
                // Handle the error, e.g., display error message to the user
                console.error('Registration failed');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error:', error);
        }
    };

    const nextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const prevStep = (e) => {
        e.preventDefault();
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        {/* Step 1: First Name, Last Name, Language */}
                        <form onSubmit={nextStep} className='w-full lg:w-[70%] mx-auto mt-5'>
                            <div className='mt-2'>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">Language</label>
                                <input
                                    id="language"
                                    type="text"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div>

                                <div className='flex items-center justify-center'>

                                    <button className='btn px-8 mt-5 btn-success' type="submit">Next</button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            All ready have an account ?
                            <Link to="/login" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>

                        <p className="mt-5 text-center text-sm text-gray-500">
                            Go to home?
                            <Link to="/first-page" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Home
                            </Link>

                        </p>
                    </>
                );
            case 2:
                return (
                    <>
                        {/* Step 2: Country, WhatsApp Number, Phone Number */}
                        <form onSubmit={nextStep} className='w-full lg:w-[70%] mx-auto mt-5'>
                            <div className='m-2'>
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                <input
                                    id="country"
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="whatsAppNumber" className="block text-sm font-medium leading-6 text-gray-900">WhatsApp Number</label>
                                <input
                                    id="whatsAppNumber"
                                    type="text"
                                    value={whatsAppNumber}
                                    onChange={(e) => setWhatsAppNumber(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                                <input
                                    id="phoneNumber"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className='flex items-center justify-center gap-10 '>
                                {step > 1 && (
                                    <button onClick={prevStep} className=" px-8 mt-5 text-white btn btn-primary">
                                        Previous
                                    </button>
                                )}
                                <button className='btn mt-5 btn-success px-8 text-white' type="submit">Next</button>

                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            All ready have an account ?
                            <Link to="/login" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>

                        <p className="mt-5 text-center text-sm text-gray-500">
                            Go to home?
                            <Link to="/first-page" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Home
                            </Link>

                        </p>
                    </>
                );
            case 3:
                return (
                    <>
                        {/* Step 3: Email, Password, Reference Number */}
                        <form onSubmit={handleSubmit} className='w-full lg:w-[70%] mx-auto mt-5'>
                            <div className='mt-2'>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className='mt-2'>
                                <label htmlFor="referenceNumber" className="block text-sm font-medium leading-6 text-gray-900">Reference Number</label>
                                <input
                                    id="referenceNumber"
                                    type="text"
                                    value={referenceNumber}
                                    onChange={(e) => setReferenceNumber(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                                />
                            </div>
                            <div className=''>
                                <div className='flex items-center justify-center gap-12'>
                                    {step > 1 && (
                                        <button onClick={prevStep} className="mt-5 px-8 btn btn-primary rounded-md">
                                            Previous
                                        </button>
                                    )}
                                    <button className='btn btn-success px-8 mt-5 text-white' type="submit">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            All ready have an account ?
                            <Link to="/login" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>

                        <p className="mt-5 text-center text-sm text-gray-500">
                            Go to home?
                            <Link to="/first-page" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Home
                            </Link>

                        </p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h1 className='text-4xl font-semibold text-center my-12'>Please Register Here</h1>
                <Stepper steps={[{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]} activeStep={step - 1} />
                {renderStep()}

            </div>
        </>
    );
};

export default Register;
