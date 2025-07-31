import { createFileRoute } from '@tanstack/react-router';
import Home from '../features/Home/Home';

function RouteComponent() {
    return <Home />;
}

export const Route = createFileRoute('/home')({
    component: RouteComponent,
});
