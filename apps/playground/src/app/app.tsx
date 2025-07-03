import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import FormPage from './FormPage';
import TablePage from './TablePage';
import SpectrumTablePage from './SpectrumTablePage';
import { GlobalToastRegion } from '@midas-ds/components';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

function NavBar() {
  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '15px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form Example</Link>
        </li>
        <li>
          <Link to="/table">Table Example</Link>
        </li>
        <li>
          <Link to="/spectrum-table">Spectrum Table Example</Link>
        </li>
      </ul>
    </nav>
  );
}

export function App() {
  return (
    <Router>
      <Provider theme={defaultTheme}>
        <GlobalToastRegion />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/spectrum-table" element={<SpectrumTablePage />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;