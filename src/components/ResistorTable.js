import React from "react";

class ResistorTable extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.voltage = [];
    }

    render() {
        this.voltage = [];
        for (let i = 0; i <= 16; i++) {
            this.voltage[i] = i / this.props.resistor.resistor;
        }
        return (<>
            <h1>Stromverlauf für Spannung von 0 bis 16V</h1>
            <table>
                <caption>Rges= {this.rpops.resistor.resistor.toFixed(2)}</caption>
                <thead>
                <tr>
                    <td>Spannung V</td>
                    <td>Strom A</td>
                </tr>
                </thead>
                <tbody>
                {this.voltage.map((e, i) => <tr>
                    <td>{i}</td>
                    <td>{e.toFixed(2)}</td>
                </tr>)}
                </tbody>
            </table>
        </>);


    }
}

export default ResistorTable;