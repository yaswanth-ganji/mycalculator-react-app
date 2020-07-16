import React from 'react';


class App extends React.Component{
    render(){
        return(  
            <div id="component">
                <div id="Main" style={{width:373, height: 120, margin:0}}>
                    <div id="screen">
                         <div id="calculatedData">{this.props.result}</div>
                          <div id='operators'>{this.props.operator}</div>
                    </div>
                </div>  
            </div>
        );
    }
}
export default App