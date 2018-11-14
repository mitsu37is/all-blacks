import React, { Component } from 'react';
import PanelList from './components/PanelList/PanelList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: true
        };

        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    startGame() {
        this.setState({
            isPlaying: true
        });
    }

    endGame() {
        this.setState({
           isPlaying: false
        });
    }

    render() {
        return (
            <div className="App">
                <header className='header'>
                    { this.state.isPlaying ? <h1 className="text-grey-darkest">ALL BLACKS</h1> : <h1 className="text-red-light">Congrats! Haka!</h1> }
                    <button onClick={ this.startGame } className="p-16 mt-4 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">Start</button>
                </header>
                <PanelList endGame={ this.endGame } isPlaying={ this.state.isPlaying } />
            </div>
        );
    }
}

export default App;
