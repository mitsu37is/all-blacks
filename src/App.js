import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import PanelList9 from './components/PanelList/PanelList9';
import PanelList16 from './components/PanelList/PanelList16';
import PanelList25 from './components/PanelList/PanelList25';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
            panelNumber: 0,
            cleared: 0
        };

        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    startGame(panelNumber) {
        this.setState({
            isPlaying: true,
            panelNumber: panelNumber
        });
    }

    endGame() {
        let cleared = this.state.cleared + 1;
        this.setState({
            isPlaying: false,
            cleared: cleared
        });
    }

    render() {
        return (
            <div className="App">
                <header className='header'>
                    <h1 className="text-grey-darkest sm:text-sm lg:text-lg">ALL BLACKS</h1>
                    <div className="inline-flex">
                        <button onClick={ () => { this.startGame(3) } } className="p-16 mt-4 m-2 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">3x3 Start</button>
                        <button onClick={ () => { this.startGame(4) } } className="p-16 mt-4 m-2 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">4x4 Start</button>
                        <button onClick={ () => { this.startGame(5) } } className="p-16 mt-4 m-2 bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">5x5 Start</button>
                    </div>
                </header>
                <span>あなたは { this.state.cleared } 回クリアしました！</span><br /><br />
                {
                    this.state.cleared >= 1 &&
                    <ReactPlayer url='https://www.dropbox.com/s/1iv04rk4j9tc4f4/message2.m4a?dl=0' playing controls={true} width={'90%'} height={'4rem'} style={{margin: '0 auto 1rem'}} />
                }
                { this.state.panelNumber === 3 && <PanelList9  endGame={ this.endGame } isPlaying={ this.state.isPlaying } /> }
                { this.state.panelNumber === 4 && <PanelList16 endGame={ this.endGame } isPlaying={ this.state.isPlaying } /> }
                { this.state.panelNumber === 5 && <PanelList25 endGame={ this.endGame } isPlaying={ this.state.isPlaying } /> }
            </div>
        );
    }
}

export default App;
