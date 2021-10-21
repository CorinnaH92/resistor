import React from "react";

class ResistorTable extends React.Component{

    render(){
        return <h2>Stromverlauf für Spannungen von 0 bis 10 Volt{this.props.state}</h2>;


    }

}
export default ResistorTable;