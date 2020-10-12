import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { useMediaQuery } from 'react-responsive';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { fetchFeaturedBookAsync } from './redux/featuredBook/featuredBookActions';
import { cacheImage } from './utilities/funcs';
import mainBkg from '../src/assets/png/IntroBkg-min.png';
import './App.scss';
import AppLoader from './components/appLoader/appLoader.component';
import ContactPage from './pages/Contact/contact-page.component';

const customHistory = createBrowserHistory();

const MobileMediaQuery = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });
  return isMobile ? children : null;
};

const TabletOrDesktopMediaQuery = ({ children }) => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  return isTabletOrDesktop ? children : null;
};

const ErrorBoundary = React.lazy(() =>
  import('./components/errorBoundary/error-boundary.component')
);

const NavDesktop = React.lazy(() =>
  import('./components/nav/navDesktop/navDesktop.component')
);

const NavMobile = React.lazy(() =>
  import('./components/nav/navMobile/navMobile.component')
);

const CreateBook = React.lazy(() =>
  import('./pages/CreateBook/createBook.component')
);

const FourZeroFour = React.lazy(() => import('./pages/404/404.component'));

const HomePage = React.lazy(() => import('./pages/Home/home.component'));

const BookPage = React.lazy(() =>
  import('./pages/BookPage/bookPage.component')
);

const AuthorPage = React.lazy(() =>
  import('./pages/AuthorPage/author-page.compnent')
);

function App({ fetchFeaturedBookAsync }) {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetchFeaturedBookAsync();
    const imgs = [mainBkg];
    setTimeout(() => {
      cacheImage(imgs, setIsLoading);
    }, 2000);
  }, [fetchFeaturedBookAsync]);

  return (
    <div className="App">
      {isLoading ? (
        <AppLoader />
      ) : (
        <Router history={customHistory}>
          <Suspense fallback={<div className="suspense-container" />}>
            <ErrorBoundary history={customHistory}>
              <MobileMediaQuery>
                <NavMobile />
              </MobileMediaQuery>
              <TabletOrDesktopMediaQuery>
                <NavDesktop />
              </TabletOrDesktopMediaQuery>

              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path="/home">
                  <HomePage />
                </Route>
                <Route exact path="/create">
                  <CreateBook />
                </Route>
                <Route exact path="/books/:id">
                  <BookPage />
                </Route>
                <Route exact path="/authors/:id">
                  <AuthorPage />
                </Route>
                <Route exact path="/contact">
                  <ContactPage />
                </Route>
                <Route path="*">
                  <FourZeroFour />
                </Route>
              </Switch>
            </ErrorBoundary>
          </Suspense>
        </Router>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  fetchFeaturedBookAsync: () => dispatch(fetchFeaturedBookAsync()),
});

export default connect(null, mapDispatchToProps)(App);
