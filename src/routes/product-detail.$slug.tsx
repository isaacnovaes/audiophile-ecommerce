import { createFileRoute } from '@tanstack/react-router';
import ErrorComponent from '../components/ErrorComponent';
import ProductDetail from '../features/Product-Detail/ProductDetail';

export const Route = createFileRoute('/product-detail/$slug')({
    component: ProductDetail,
    errorComponent: ErrorComponent,
});
