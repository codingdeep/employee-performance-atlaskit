import  React from 'react';
import {Grid, XCSS, Box, xcss} from '@atlaskit/primitives'

interface Props {
    xcss?: XCSS;
    children: React.ReactNode;
}

const pageContentStyles = xcss({
    gridColumnStart: 2,
    gridColumnEnd: 12,
    paddingBlock: 'space.400'
});

const PageGridContainer: React.FC<Props> = ({xcss, children}) => {
   return(
       <Grid testId="page-grid-container" templateColumns="repeat(12, 1fr)" xcss={xcss}>
          <Box xcss={pageContentStyles}>{children}</Box>
       </Grid>
   )
}

export default PageGridContainer;