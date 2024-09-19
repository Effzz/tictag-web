import './styles/tailwind.css';

import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import LoaderC from './components/Loader/index.tsx';
import AppRoutes from './routes/index.tsx';
import { store } from './services/redux/store';

const persistor = persistStore(store);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate
            loading={
                <div className='flex justify-center items-center h-screen'>
                    <LoaderC />
                </div>
            }
            persistor={persistor}
        >
            <QueryClientProvider client={queryClient}>
                <SnackbarProvider
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    maxSnack={1}
                >
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </SnackbarProvider>
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);
