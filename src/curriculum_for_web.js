import React from 'react';
import './Pages_css/Curriculum.css';


class Curriculuweb extends React.Component{
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
            <h2>Web Development with Python Certification Curriculum</h2>
            <table>
                <tr>
                    <td> Introduction to Django  <button onClick={this.onpy}>view</button> </td>
                   
                </tr>
                <div className={this.state.displaytype}>
                    <li>Usage of pip for package installation</li>
                    <li>Virtual Environment</li>
                    <li> Creating Base Project</li>
                    <li> Django Web Server</li>
                    <li>Django Architecture</li>
                </div>
                <tr>
                    <td>Django Forms<button onClick={this.onpy1}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype1}>
                    <li>Basic Forms</li>
                    <li>Model Forms</li>
                    <li>Multiple Forms</li>
                    <li> Forms API</li>

                </div>
                <tr>
                    <td>Django REST Framework<button onClick={this.onpy2}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype2}>
                    <li>API</li>
                    <li>Serialization</li>
                    <li>Deserialization</li>
                    <li>Naive Bayes</li>
                    <li> Support Vector Machines and Decision Trees</li>
                </div>
                <tr>
                    <td>Django Views<button onClick={this.onpy3}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype3}>
                    <li>Function Based Views</li>
                    <li> Function Based Views</li>
                    <li>Usage of kwargs in CBV and FBV</li>
                    <li>Template Rendering</li>
                </div>
                <tr>
                    <td>Django Template Language <button onClick={this.onpy4}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype4}>
                    <li> Template Settings</li>
                    <li>  Rendering</li>
                    <li> Base Directory</li>
                    <li>  Static Files, Extensions</li>
                    <li>Template Inheritation</li>
                </div>
            </table>

        </div>
    )}


}

export default Curriculuweb;