import { createFileRoute } from '@tanstack/react-router';
import ErrorComponent from '../components/ErrorComponent';
import Checkout from '../features/Checkout/Checkout';

export const Route = createFileRoute('/checkout')({
    component: Checkout,
    errorComponent: ErrorComponent,
});
