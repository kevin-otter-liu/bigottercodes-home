import { Route, Switch } from 'react-router-dom';

// components
import MainPage from './pages/MainPage';
import MainNavigationBar from './components/layout/MainNavigationBar';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
