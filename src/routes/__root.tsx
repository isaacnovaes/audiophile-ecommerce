import { Outlet, createRootRoute } from '@tanstack/react-router';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import { CartContextProvider } from '../context/CartContext/CartContextProvider';

function RootComponent() {
    return (
        <div className='bg-gray-200 **:transition-colors **:duration-300'>
            <CartContextProvider>
                <TopBar />
                <Outlet />
                {/* <TanStackRouterDevtools /> */}
                <Footer />
            </CartContextProvider>
        </div>
    );
}

export const Route = createRootRoute({
    component: RootComponent,
});
