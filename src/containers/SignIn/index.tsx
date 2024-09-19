import SignInFormContainer from '../Forms/SignIn';

const SignInContainer = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className='flex-row w-[480px]'>
                <div className='text-center mb-6'>
                    <h1 className='text-2xl font-bold'>WaveTech Electronics PTE LTD</h1>
                </div>
                <div className='bg-white p-8 rounded-lg shadow-md w-full'>
                    <SignInFormContainer />
                </div>
            </div>
        </div>
    );
};

export default SignInContainer;
