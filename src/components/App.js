import React from "react";

// now we want to get data from the store : Subscribing to store
import { data } from '../data';

import Navbar from "./Navbar";

import MovieCard from "./MovieCard";


import { addMovies } from "../actions/index";


class App extends React.Component {

  componentDidMount() {

    const { store } = this.props;

    // after each dispatching "this" subscribe function will be called
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    })

    // make api call
    // dispatch Action
    this.props.store.dispatch(addMovies(data));



    console.log("STATE ", this.props.store.getState());
  }

  render() {

    // const movies = this.props.store.getState(); 
    // as now we have an object {list:{}, Favourites:{}}

    const { list } = this.props.store.getState();

    console.log('NEW STATE ', this.props.store.getState())

    console.log('RENDER');

    return (
      <div className="App" >

        <Navbar />

        <div className="main">

          <div className="tabs">

            <div className="tab"> Movies </div>
            <div className="tab"> Favourites </div>

          </div>

          <div className="list">
            {
              list.map((movie, index) => (
                // passing via props
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                />
              ))
            }

          </div>

        </div>
      </div>
    );
  }
}

export default App;