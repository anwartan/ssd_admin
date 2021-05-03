import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import './App.css';
import { Navbar, Sidebar } from './components/molecules';
import Route from './routes';

function App({ location }) {
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);

  const onRouteChanged = (locationPath) => {
    window.scrollTo(0, 0);
    const fullPageRoutes = ['/login', '/register'];
    for (let i = 0; i < fullPageRoutes.length; i += 1) {
      const element = fullPageRoutes[i];
      if (locationPath.pathname === element) {
        setIsFullPageLayout(true);
        break;
      } else {
        setIsFullPageLayout(false);
      }
    }
  };
  useEffect(() => {
    onRouteChanged(location);
  }, [location]);
  return (
    <div className="App">
      {!isFullPageLayout && <Sidebar />}
      <div className={clsx('main', [isFullPageLayout ? 'fullmain' : 'bgImage'])}>
        { !isFullPageLayout && <Navbar />}
        <div className="content">

          <Route />
        </div>
      </div>

    </div>
  );
}

export default withRouter(App);
