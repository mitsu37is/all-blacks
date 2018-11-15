import React from 'react';
import Panel from '../Panel/Panel';

class PanelList16 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panelColors: this.initializePanelColors()
        }
    }

    initializePanelColors() {
        const panelColors = [];
        for (let i = 0; i < 16; i++) {
            let isBlack = Math.random() >= 0.5;
            panelColors.push(isBlack);
        }
        return panelColors;
    }

    isAllBlack(panelColors) {
        return panelColors.every(isBlack => isBlack);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isPlaying) {
            this.setState({
                panelColors: this.initializePanelColors()
            });
        }
    }

    handleClick(i) {
        if (this.props.isPlaying) {
            const panelColors = this.state.panelColors.slice();
            switch (i % 4) {
                case 0:
                    panelColors[i+1] = !panelColors[i+1];
                    break;
                case 1:
                    panelColors[i-1] = !panelColors[i-1];
                    panelColors[i+1] = !panelColors[i+1];
                    break;
                case 2:
                    panelColors[i-1] = !panelColors[i-1];
                    panelColors[i+1] = !panelColors[i+1];
                    break;
                default:
                    panelColors[i-1] = !panelColors[i-1];
                    break;
            }
            switch (Math.floor(i / 4)) {
                case 0:
                    panelColors[i+4] = !panelColors[i+4];
                    break;
                case 1:
                    panelColors[i-4] = !panelColors[i-4];
                    panelColors[i+4] = !panelColors[i+4];
                    break;
                case 2:
                    panelColors[i-4] = !panelColors[i-4];
                    panelColors[i+4] = !panelColors[i+4];
                    break;
                default:
                    panelColors[i-4] = !panelColors[i-4];
                    break;
            }
            panelColors[i] = !panelColors[i];
            this.setState({
                panelColors: panelColors
            });

            if (this.isAllBlack(panelColors)) {
                this.props.endGame();
            }
        }
    }

    renderPanel(i) {
        return <Panel isBlack={ this.state.panelColors[i] } handleClick={ () => { this.handleClick(i) } } />;
    }

    render() {
        return (
            <div className='panel-list w-full'>
                <div>
                    { this.renderPanel(0) }
                    { this.renderPanel(1) }
                    { this.renderPanel(2) }
                    { this.renderPanel(3) }
                </div>
                <div>
                    { this.renderPanel(4) }
                    { this.renderPanel(5) }
                    { this.renderPanel(6) }
                    { this.renderPanel(7) }
                </div>
                <div>
                    { this.renderPanel(8) }
                    { this.renderPanel(9) }
                    { this.renderPanel(10) }
                    { this.renderPanel(11) }
                </div>
                <div>
                    { this.renderPanel(12) }
                    { this.renderPanel(13) }
                    { this.renderPanel(14) }
                    { this.renderPanel(15) }
                </div>
            </div>
        );
    }
}

export default PanelList16;