import { createFileRoute } from '@tanstack/react-router';
import ErrorComponent from '../components/ErrorComponent';
import Category from '../features/Category/Category';

export const Route = createFileRoute('/category/$type')({
    component: Category,
    errorComponent: ErrorComponent,
});
