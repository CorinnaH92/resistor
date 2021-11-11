import React from "react";

class ResistorCalculator extends React.Component {

    constructor(props) {
        super();
        this.props= props;

        this.state= {
            r1: 0,
            r2: 0,
            r3: 0,
        };
    }

    change(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    calcRess(){
        this.props.resistor.setResistor(parseFloat(this.state.r1)+parseFloat(this.state.r2)+parseFloat(this.state.r3));
    };
    clacResP(){
        let inv= 1/this.state.r1+ 1/this.state.r2+ 1/this.state.r3;
        this.props.resistor.setResistor(1/inv);
    }


    render() {
        console.log(this.state);
        return (<>
                <div>
                    <label htmlFor="r1">R1</label>
                    <input value={ this.state.r1} type={'number'} id={'r1'} onChange={e=>this.setState({r1:e.target.value})}/>
                </div>

                <div>
                    <label htmlFor="r2">R2</label>
                    <input value={ this.state.r2} type={'number'} id={'r2'} onChange={e=>this.setState({r2:e.target.value})}/>
                </div>

                <div>
                    <label htmlFor="r3">R3</label>
                    <input value={ this.state.r3} type={'number'} id={'r3'} onChange={e=>this.setState({r3:e.target.value})}/>
                </div>

                <div>
                    < button onClick={this.calculateSeries.bind}>Serienschaltung berechnen</button>
                    < button onClick={this.calculateParallel.bind}>Parallelschaltung berechnen</button>
                </div>
            </>
        );
    }
}

export default ResistorCalculator;

//<App>
