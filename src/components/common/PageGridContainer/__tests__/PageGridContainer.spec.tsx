import React from 'react';
import {render} from "@testing-library/react";
import PageGridContainer from "~src/components/common/PageGridContainer/PageGridContainer";

describe('Page Grid Container', ()=>{
    it('should render the container without problem', function () {
        const {container} = render(<PageGridContainer><div>Test child</div></PageGridContainer>);
        expect(container).toBeInTheDocument();
    });
    it('should applies the correct grid structure', function () {
        const {getByTestId} = render(
            <PageGridContainer>
                <div>Grid Container child</div>
            </PageGridContainer>
        );

        const gridElement = getByTestId('page-grid-container');
        expect(gridElement).toHaveStyle('--ds-grid--grid-template-columns:repeat(12, 1fr)');
    });
})