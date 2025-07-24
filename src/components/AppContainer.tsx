import type { ReactNode } from 'react';

const AppContainer = (props: { readonly children: ReactNode }) => {
    return <div className='mx-auto w-[90%] max-w-[1111px]'>{props.children}</div>;
};
export default AppContainer;
