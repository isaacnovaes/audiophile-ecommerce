import { getRouteApi } from '@tanstack/react-router';
import AppContainer from '../../components/AppContainer';
import CompanyInfo from '../../components/CompanyInfo';
import GeneralProductCategoriesList from '../../components/GeneralProductCategoriesList';
import GoBackButton from '../../components/GoBackButton';
import { data } from '../../data';
import ProductFeatures from './ProductDescription';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import YouAlsoMayLike from './YouAlsoMayLike';

const ProductDetail = () => {
    const { slug } = getRouteApi('/product-detail/$slug').useParams();
    const product = data.find((p) => p.slug === slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <AppContainer>
            <GoBackButton />
            <ProductInfo product={product} />
            <ProductFeatures product={product} />
            <ProductGallery product={product} />
            <YouAlsoMayLike product={product} />
            <GeneralProductCategoriesList />
            <CompanyInfo />
        </AppContainer>
    );
};
export default ProductDetail;
