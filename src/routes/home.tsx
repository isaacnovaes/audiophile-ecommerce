import { createFileRoute } from '@tanstack/react-router';
import ErrorComponent from '../components/ErrorComponent';
import Home from '../features/Home/Home';

export const Route = createFileRoute('/home')({
    component: Home,
    errorComponent: ErrorComponent,
});
