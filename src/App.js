import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { fetchFeaturedBookAsync } from './redux/featuredBook/featuredBookActions';
import { cacheImage } from './utilities/funcs';
import mainBkg from '../src/assets/png/IntroBkg-min.png';
import './App.scss';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import AppLoader from './components/appLoader/appLoader.component';

const customHistory = createBrowserHistory();

const ErrorBoundary = React.lazy(() =>
  import('./components/errorBoundary/error-boundary.component')
);
const NavDesktop = React.lazy(() =>
  import('./components/nav/navDesktop/navDesktop.component')
);
const CreateBook = React.lazy(() =>
  import('./pages/CreateBook/createBook.component')
);
const FourZeroFour = React.lazy(() => import('./pages/404/404.component'));

const HomePage = React.lazy(() => import('./pages/Home/home.component'));

const BookPage = React.lazy(() =>
  import('./pages/BookPage/bookPage.component')
);

function App({ fetchFeaturedBookAsync }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchFeaturedBookAsync();
    const imgs = [mainBkg];
    setTimeout(function () {
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
              <NavDesktop />
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
                <Route path="*">
                  <FourZeroFour />
                </Route>
              </Switch>
            </ErrorBoundary>{' '}
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
