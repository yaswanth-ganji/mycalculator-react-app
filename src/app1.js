import React from 'react';
import './index.css';
import App from './app'


class App1 extends React.Component{
    
    state ={
        x: ['*','/','C',7,8,9,'x',4,5,6,'-',1,2,3,'+','%','0','.','='],
        num1:"",num2:"",operators:"",output:'', start: false 
    }

    renderLiElements = () => {
        return this.state.x.map((el) => {
            if(el=="C"){
                return <li className = "num clear" key = {el} >{el}</li>
            }
            return <li className = "num" key = {el} >{el}</li>
        })
    }
     operation=(e)=>{
         if(this.state.start) {
            if((Number(e.target.textContent) || e.target.textContent=='0' || e.target.textContent=='.') && (!this.state.operators)){
                this.setState({num1:this.state.num1 + e.target.textContent, output: this.state.num1 + e.target.textContent})
    
            }
           else if(!Number(e.target.textContent) && e.target.textContent!= "C" && e.target.textContent!="0" && e.target.textContent!="x" && e.target.textContent!="=" && e.target.textContent!='.'){
                this.setState({operators: e.target.textContent})
            }
            else if((this.state.operators)&& (Number(e.target.textContent)||e.target.textContent==0 || e.target.textContent=='.')){
                this.setState({num2:this.state.num2+e.target.textContent, output: this.state.num2 + e.target.textContent})
            }
            else if(e.target.textContent=="=" && this.state.num1 && this.state.operators && this.state.num2){
           
                  if(this.state.operators=="+"){
                      this.setState({output: Number(this.state.num1)+Number(this.state.num2)})
                  }
                  else if(this.state.operators=='-'){
                      this.setState({output: Number(this.state.num1)-Number(this.state.num2)})
                  }
                  else if(this.state.operators=='*'){
                    this.setState({output: Number(this.state.num1)*Number(this.state.num2)})
                }
                  else if(this.state.operators=='/'){
                    this.setState({output: Number(this.state.num1)/Number(this.state.num2)})
                }
                  else if(this.state.operators=='%'){
                    this.setState({output: Number(this.state.num1)%Number(this.state.num2)})
                }
            }
                   else if(e.target.textContent=="C"){
                this.setState({num1:"",num2:"",operators:"", output: 0})
            }
            else if(e.target.textContent=="x"){
                if(this.state.num1.length==1){
                    this.setState({output:0,num1:""})
                }
               else if(this.state.num1  && !this.state.operators && !this.state.num2){
                   this.setState({num1: this.state.num1.slice(0,-1),output: this.state.num1.slice(0,-1)})
            }
            else if(this.state.num1 && this.state.operators && this.state.num2){
                this.setState({num2: this.state.num2.slice(0,-1),output: this.state.num2.slice(0,-1)})
            }
           
            else if(this.state.num1 && this.state.operators && this.state.num2==""){
                this.setState({operators:"",output:this.state.num1})
            }
           }
         }    
    }
    start=()=>{
        if(!this.state.start) {
            this.setState({start: true, output: 0})
        } else {
            this.setState({start: false, output: '', operators: '', num1:"",num2:""})
        }
    }
    

    render(){
        return(
            <div id="calculator">
                <App result = {this.state.output} operator={this.state.operators}/>
                
                
                <div id="bottomMain">
                    <div id="start">
                    
                <button onClick={this.start}></button>
                </div>
                    <ul id = "bottomInner1" onClick={this.operation}>
                        {this.renderLiElements()}
                    </ul>
                </div>
            </div>
        
        );
    }
}
export default App1