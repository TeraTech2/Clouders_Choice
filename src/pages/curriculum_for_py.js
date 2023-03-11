import React from 'react';


class Curriculupy extends React.Component{
    state={
        displaytype : 'pythonprog_none',
        displaytype1 : 'sql_none',
        displaytype2 : 'ml_none',
        displaytype3: 'ds_none',
        displaytype4: 'dl_none'
    }

    onpy=(event)=>{
        this.setState({
            displaytype : 'pythonprog_block'
        })
    }
    onpy1=(event)=>{
        this.setState({
            displaytype1 : 'sql_block'
        })
    }
    onpy2=(event)=>{
        this.setState({
            displaytype2 : 'ml_block'
        })
    }
    onpy3=(event)=>{
        this.setState({
            displaytype3 : 'ds_block'
        })
    }
    onpy4=(event)=>{
        this.setState({
            displaytype4 : 'dl_block'
        })
    }

    render(){
    return (
        <div className='Curriculum'>
            <h2>Python Training in Vijayawada</h2>
            <table>
                <tr>
                    <td> Python Basic Syntax and Data Types   <button onClick={this.onpy}>view</button> </td>
                   
                </tr>
                <div className={this.state.displaytype}>
                    <li>Python input and output operations</li>
                    <li>Comments</li>
                    <li> Variables, rules for naming variables</li>
                    <li>  Basic Data Types in Python</li>
                    <li>Typecasting in python</li>
                </div>
                <tr>
                    <td>Strings in Python <button onClick={this.onpy1}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype1}>
                    <li>Creating strings</li>
                    <li>String formatting</li>
                    <li>Indexing</li>
                    <li> Slicing</li>
                    <li>String methods</li>
                </div>
                <tr>
                    <td>Python Conditional Statement and Loops<button onClick={this.onpy2}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype2}>
                    <li>If statements</li>
                    <li>If-elif-else statements</li>
                    <li>While, for loop</li>
                    <li> break, continue and pass</li>
                    <li> zip, assert</li>
                </div>
                <tr>
                    <td>Modules and Packages  <button onClick={this.onpy3}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype3}>
                    <li>Creating modules</li>
                    <li>Importing functions from different module</li>
                    <li>Creating packages</li>
                    <li> Working on Numpy,Pandas and Matplotlib</li>
                    <li>Data Analysis Using Numpy, Pandas and Matplotlib - HR Analytics</li>
                </div>
                <tr>
                    <td>OOPS and Files  <button onClick={this.onpy4}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype4}>
                    <li>Creating classes & Objects</li>
                    <li> Attributes and methods</li>
                    <li>Opening file</li>
                    <li>  Read,write,close files</li>
                    <li>Opening files in different modes</li>
                </div>
            </table>

        </div>
    )}


}

export default Curriculupy;