import { Outlet, createRootRoute } from '@tanstack/react-router';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';

function RootComponent() {
    return (
        <div className='**:transition-colors **:duration-300'>
            <TopBar />
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
            <Footer />
        </div>
    );
}

export const Route = createRootRoute({
    component: RootComponent,
});
