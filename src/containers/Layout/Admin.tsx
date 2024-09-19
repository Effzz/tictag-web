import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const { data: userData } = useSelector((state: any) => state.user);

    useEffect(() => {
        if (!userData) {
            navigate('/');
            // force to sign in again
        }
    }, [userData]);

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Navigation Bar */}
            <nav className='bg-blue-500 text-white py-4'>
                <div className='container mx-auto px-4 lg:px-8 flex justify-between items-center'>
                    <div className='text-xl font-semibold'>WaveTech Electronics PTE LTD</div>
                    <div>
                        <NavLink to={'/products'} className='hover:underline px-4'>
                            Products
                        </NavLink>
                        <NavLink to={'/warranty-claims'} className='hover:underline px-4'>
                            Warranty Claims
                        </NavLink>
                        <button className='px-4 text-red-300'>Sign Out</button>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className='flex-grow bg-gray-100 py-6'>
                <div className='container mx-auto px-4 lg:px-8'>{children}</div>
            </main>
        </div>
    );
};

export default AdminLayout;
