import React, {ReactNode} from 'react';
import {Box, xcss} from '@atlaskit/primitives'
import {PageLayout, Content, LeftSidebar, TopNavigation} from '@atlaskit/page-layout'
import TopNavigationContents from "~src/components/common/TopNavigationContents/TopNavigationContents";
interface BasePageProps {

    /*
    * Main content should come as children
    * */
    children: ReactNode;
    /*
    * Render sidebar with the main content if sidebar render is enabled
    * */
    renderSidebar?: ReactNode;
}
const BasePage:React.FC<BasePageProps> = ({children, renderSidebar}) => {
  return (
      <PageLayout>
          <TopNavigation isFixed>
              <TopNavigationContents/>
          </TopNavigation>
          <Content>
              {renderSidebar && (
                  <LeftSidebar collapsedState="collapsed">
                      <Box backgroundColor="elevation.surface.sunken" xcss={xcss({height: '100%', padding: 'space.100'})}>
                      {renderSidebar}
                      </Box>
                  </LeftSidebar>
              )}
              {children}
          </Content>
      </PageLayout>
  )
}
export default BasePage;
