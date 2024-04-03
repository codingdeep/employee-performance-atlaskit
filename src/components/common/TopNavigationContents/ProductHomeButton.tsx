import React from 'react';
import {ProductHome} from '@atlaskit/atlassian-navigation';
import ElevateIcon from "~src/components/common/Icons/Elevate/ElevateIcon/ElevateIcon";
import ElevateLogo from "~src/components/common/Icons/Elevate/ElevateLogo/ElevateLogo";
import {useRouterActions} from "react-resource-router";

const Icon = () => <ElevateIcon/>
const Logo = () => <ElevateLogo/>
const ProductHomeButton: React.FC = () => {
    const {push} = useRouterActions();
    return(
        <ProductHome
            testId="product-home-button"
            onClick={()=> push('/')}
            icon={Icon} logo={Logo}/>
    )
}
export default ProductHomeButton;
