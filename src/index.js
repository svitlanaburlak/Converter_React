// == Import : npm
import { createRoot } from 'react-dom/client';

// == Import : local
import Converter from 'src/components/Converter';

// == Render
const rootReactElement = <Converter />;

// The target of the DOM where our structure will be placed
const root = createRoot(document.getElementById('root'));

// React virtual DOM => DOM (web page)
root.render(rootReactElement);
