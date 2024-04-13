import React, {useContext} from 'react';
import PageHeader from '@atlaskit/page-header'
import PageGridContainer from "~src/components/common/PageGridContainer/PageGridContainer";
import {useTitle} from "react-use";
import {PAGE_TITLES} from "~src/utils/constants/constants";
import {UserContext} from "~src/components/context/UserContext/UserContext";
import {Stack} from "@atlaskit/primitives";
import ElevateTimelineContainer from "~src/components/ElevateTimeline/ElevateTimeline.container";

const HomePageContent = () => {
    return(
        <Stack space="space.400">
            <Stack>
                <ElevateTimelineContainer/>
            </Stack>
        </Stack>
    )
}

const HomePage: React.FC = () => {
    useTitle(PAGE_TITLES.HOME);
    const {user} = useContext(UserContext);
   return(
       <PageGridContainer>
           {user && <PageHeader>☀️ G'Day {user.name}</PageHeader> }
           <HomePageContent/>
       </PageGridContainer>
   )
}
export default HomePage;
