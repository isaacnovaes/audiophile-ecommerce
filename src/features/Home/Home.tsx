import { Link } from '@tanstack/react-router';
import AppContainer from '../../components/AppContainer';
import Button from '../../components/Button';
import CompanyInfo from '../../components/CompanyInfo';
import GeneralProductCategoriesList from '../../components/GeneralProductCategoriesList';
import HomeHero from '../../components/HomeHero';
import HomeSpecialProductsList from './HomeSpecialProductsList';

const Home = () => {
    return (
        <>
            <HomeHero />
            <AppContainer>
                <section className='desktop:items-start desktop:w-[380px] relative flex h-[calc(100vh-92px)] flex-col items-center justify-normal'>
                    <h2 className='text-overline tablet:mt-31 desktop:mt-60 tablet:mb-6 mt-27 mb-4 text-center text-white/[49.64%] uppercase'>
                        new product
                    </h2>
                    <h1 className='tablet:text-h1 desktop:text-left mb-6 text-center text-[36px]/[40px] font-bold tracking-[1.29px] text-white uppercase'>
                        XX99 Mark II Headphones
                    </h1>
                    <h3 className='text-body tablet:mb-10 desktop:text-left mb-7 text-center text-balance text-white/[75%]'>
                        Experience natural, lifelike audio and exceptional build quality made for
                        the passionate music enthusiast.
                    </h3>
                    <Link params={{ slug: 'xx99-mark-two-headphones' }} to='/product-detail/$slug'>
                        <Button label='see product' />
                    </Link>
                </section>
                <GeneralProductCategoriesList />
                <HomeSpecialProductsList />
                <CompanyInfo />
            </AppContainer>
        </>
    );
};
export default Home;
