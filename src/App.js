import React from 'react'
import { render } from 'react-dom'
import { Router, Match } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

const App = ()=>{
    return (
      <Router>
        <div className="app">
          <Link exactly pattern = '/' component= { Landing } />
          <Link
            pattern= '/search'
            component= { (props) => <Search shows= { preload.shows } { ...props } /> }
          />
          <Link
            pattern= '/details/:id'
            component= { (props) => {
              const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
              return <Details show= { shows[0] } { ...props } />
            }}
          />
        </div>
      </Router>
    );
};

export default App;

// render(<App />, document.getElementById('app'));