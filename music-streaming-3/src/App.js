import React from 'react'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <header>
        <div>
          <div>Add Album</div>
          <div>Albums</div>
        </div>
      </header>
      <Router>
      <Switch>
                <Route path="/" component={App} exact />
                <Route path="/add-album" component={AddAlbum} />
                <Route path="/albums" component={Albums} />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
