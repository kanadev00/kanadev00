import './style.css';
import App from "./components/App.js";
import {createRoot} from 'react-dom/client';

console.log('Script loaded, attempting to mount React...');
const container = document.getElementById('react-container');
console.log('Container element:', container);

if (container) {
    const root = createRoot(container);
    console.log('Root created, rendering App...');
    root.render(<App/>);
    console.log('App rendered successfully');
} else {
    console.error('Could not find #react-container element!');
}