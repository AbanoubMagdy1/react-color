import React, { Component } from 'react';
import ColorBox from './ColorBox.jsx'
import NavBar from './NavBar.jsx'
import './Palette.css'


class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {degree : 500, format : "hex"}
    }
    handleLevelChange = (value) => {
        this.setState({degree : value})
    }
    handleFormat = (value) => {
        this.setState({format : value})
    }
    render() {
        const {degree} = this.state
        const colorBoxes = this.props.colors[degree].map((color, i) => (
            <ColorBox background={color[this.state.format]}
                      name={color.name}
                      key={i}
                      index={i}
                      paletteId={this.props.id}
                      original={true}/>
        ))
        return (
            <div className="Palette">
                <NavBar handleSlider={this.handleLevelChange}
                        level={this.state.degree}
                        handleSelect={this.handleFormat}
                        format={this.state.format}
                        original={true}/>
                
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    {this.props.paletteName}
                    <span className="emoji">{this.props.emoji}</span>
                </footer>
                
            </div>
        );
    }
}

export default Palette;