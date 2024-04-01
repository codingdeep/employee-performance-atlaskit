import React from 'react';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
  takeRecords: () => null,
});
global.IntersectionObserver = mockIntersectionObserver;

const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
global.ResizeObserver = mockResizeObserver;

// jest.mock('./src/relay/relay-environment', () => {
//   const { createMockEnvironment } = require('relay-test-utils');
//   return createMockEnvironment();
// });

// jest.mock('@atlassian/editor-plugin-ai/ElevatePrebuilt', () => ({
//   createElevateEditorPluginAIProvider: jest.fn(),
// }));

// jest.mock('~src/components/common/FormFields/EditorField/AdfRenderer/AdfRenderer', () => {
//   return ({ document }) => <div data-testid="adf-renderer">{document}</div>;
// });

// jest.mock('~src/hooks/useAnalytics', () => ({
//   useAnalytics: () => ({
//     sendScreenEvent: jest.fn(),
//     sendUIEvent: jest.fn(),
//     sendTrackEvent: jest.fn(),
//   }),
// }));
//
// jest.mock('@atlaskit/editor-core', () => ({
//   Editor: jest.fn(() => <div>Mock Editor</div>),
//   WithEditorActions: jest.fn(props => props.render({})),
//   EditorContext: jest.fn(() => <div>Mock EditorContext</div>),
//   EditorActions: jest.fn(),
// }));

afterAll(() => global.gc && global.gc());
