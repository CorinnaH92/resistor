import React from "react";

class ResistorCalculator extends React.Component {

    constructor() {
        super();
        this.state = {
            r1: 0,
            r2: 0,
            r3: 0,
        };
    }

    change(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    calculateSeries() {
        const {r1, r2, r3} = this.state;
        this.props.setResistance();
       double rg= r1+r2+r3;

    }

    calculateParllel() {
        this.props.setResistance();

    }

    render() {
        console.log(this.state);
        return (<>
                <div>
                    <label htmlFor="r1">R1</label>
                    <input type="number" name="r1" onChange={(this.change.bind(this))}/>
                </div>

                <div>
                    <label htmlfor="r2">R2</label>
                    <input type="number" name="r2" onChange={(this.change.bind(this))}/>
                </div>

                <div>
                    <label htmlfor="r3">R3</label>
                    <input type="number" name="r3" onChange={(this.change.bind(this))}/>
                </div>

                <div>
                    < button onClick={this.calculateSeries.bind}>Serienschaltung berechnen</button>
                    < button onClick={this.calculateParllel.bind}>Parallelschaltung berechnen</button>
                </div>
            </>
        );
    }
}

export default ResistorCalculator;