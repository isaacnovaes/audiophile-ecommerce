import { ErrorComponent, getRouteApi, Link } from '@tanstack/react-router';
import AppContainer from '../../components/AppContainer';
import Button from '../../components/Button';
import CompanyInfo from '../../components/CompanyInfo';
import GeneralProductCategoriesList from '../../components/GeneralProductCategoriesList';
import { data } from '../../data';
import { CategoryTypeSchema } from '../../types/global';
import CategoryItem from './CategoryItem';

const Category = () => {
    const { type } = getRouteApi('/category/$type').useParams();

    const categoryTypeValidation = CategoryTypeSchema.safeParse(type);

    if (categoryTypeValidation.error) {
        const error = new Error(`${type} is a wrong category`);
        return (
            <div className='my-10 flex flex-col items-center'>
                <ErrorComponent error={error} />
                <Link to='/home'>
                    <Button label='Go to home' />
                </Link>
            </div>
        );
    }

    const productsFromType = data.filter((d) => d.category === categoryTypeValidation.data);

    return (
        <>
            <div className='flex h-[196px] items-center justify-center bg-black'>
                <h2 className='text-h2 text-white uppercase'>{categoryTypeValidation.data}</h2>
            </div>
            <AppContainer>
                {productsFromType.map((product) => (
                    <CategoryItem key={product.id} product={product} />
                ))}
                <GeneralProductCategoriesList />
                <CompanyInfo />
            </AppContainer>
        </>
    );
};
export default Category;
