import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { destroyData as destroyReduxUserData } from '../../services/redux/slices/user';

const AdminLayout = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const { data: userData } = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userData) {
            navigate('/');
        }
    }, [userData]);

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Navigation Bar */}
            <nav className='bg-blue-500 text-white py-4'>
                <div className='container mx-auto px-4 lg:px-8 flex justify-between items-center'>
                    <div className='text-xl font-semibold'>WaveTech Electronics PTE LTD</div>
                    <div>
                        <NavLink
                            to={'/products'}
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-300 px-3 py-2 rounded' : 'text-gray-300 px-3 py-2 rounded'
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to={'/warranty-claims'}
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-300 px-3 py-2 rounded' : 'text-gray-300 px-3 py-2 rounded'
                            }
                        >
                            Warranty Claims
                        </NavLink>
                        <button
                            className='px-4 text-red-200'
                            onClick={() => {
                                dispatch(destroyReduxUserData());
                                navigate('/');
                            }}
                        >
                            Sign Out
                        </button>
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
