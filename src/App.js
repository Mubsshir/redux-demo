import React from 'react';
import './App.css';
import Counter from './component/Counter';
import Login from './component/Login'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { authActions } from './store';

function App() {
  const isAuthenticate = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <div className="App">
      <header>

        <h3>Counter App</h3>
        {isAuthenticate && <button className='logout' onClick={logoutHandler}>Log Out</button>}
      </header>
      <main>
        {!isAuthenticate ? <Login /> : <Counter />}
      </main>
    </div >
  );
}

export default App;
