import React from "react";
import { ReactDOM } from "react";


test('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container); 
    root.render(<SamuraiJSApp tab="home" />);
    root.unmount();
});