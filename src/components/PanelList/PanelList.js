import React from 'react';
import Panel from '../Panel/Panel';

class PanelList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            panelColors: this.initializePanelColors()
        }
    }

    initializePanelColors() {
        const panelColors = [];
        for (let i = 0; i < 9; i++) {
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
            switch (i % 3) {
                case 0:
                panelColors[i+1] = !panelColors[i+1];
                break;
                case 1:
                    panelColors[i-1] = !panelColors[i-1];
                    panelColors[i+1] = !panelColors[i+1];
                    break;
                default:
                    panelColors[i-1] = !panelColors[i-1];
                    break;
            }
            switch (Math.floor(i / 3)) {
                case 0:
                    panelColors[i+3] = !panelColors[i+3];
                    break;
                case 1:
                    panelColors[i-3] = !panelColors[i-3];
                    panelColors[i+3] = !panelColors[i+3];
                    break;
                default:
                    panelColors[i-3] = !panelColors[i-3];
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
                </div>
                <div>
                    { this.renderPanel(3) }
                    { this.renderPanel(4) }
                    { this.renderPanel(5) }
                </div>
                <div>
                    { this.renderPanel(6) }
                    { this.renderPanel(7) }
                    { this.renderPanel(8) }
                </div>
            </div>
        );
    }
}

export default PanelList;