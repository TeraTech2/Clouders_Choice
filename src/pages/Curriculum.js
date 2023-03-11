import React from 'react';


class Curriculu extends React.Component{
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
            <h2>Python for Data Science Certification Curriculum</h2>
            <table>
                <tr>
                    <td> Python Programming   <button onClick={this.onpy}>view</button> </td>
                   
                </tr>
                <div className={this.state.displaytype}>
                    <li>Python Basic Syntax and Data Types</li>
                    <li>Operators in Python</li>
                    <li>Strings in Python</li>
                    <li> Lists, Tuples, Dictionaries, Sets</li>
                    <li>Object Oriented Programming Concepts</li>
                </div>
                <tr>
                    <td>SQL and NOSQL Database  <button onClick={this.onpy1}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype1}>
                    <li>SQL</li>
                    <li>Sub Queries/Nested Queries/Inner Queries.</li>
                    <li>Execution of an SQL statement.</li>
                    <li> Categories of NoSql Databases</li>
                    <li>Creating Database and storing Data</li>
                </div>
                <tr>
                    <td>Machine Learning Fundamentals  <button onClick={this.onpy2}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype2}>
                    <li>Data Transformation and Preprocessing</li>
                    <li>Train,Test and Validation Split</li>
                    <li>Overfitting And Underfitting</li>
                    <li> Different types of machine learning</li>
                    <li>Different stages of machine learning projects.</li>
                </div>
                <tr>
                    <td>Python for Data Science  <button onClick={this.onpy3}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype3}>
                    <li>NumPy</li>
                    <li>Pandas for Data Analysis</li>
                    <li>Data Visualization Using Matplotlib, Seaborn And Plotly</li>
                    <li> Data Analysis And Visualization Projects</li>
                    <li>Data Analysis Using Numpy, Pandas and Matplotlib - HR Analytics</li>
                </div>
                <tr>
                    <td>Deep Learning  <button onClick={this.onpy4}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype4}>
                    <li>RISE OF THE DEEP LEARNING</li>
                    <li>Training Neural Networks</li>
                    <li>Artificial Neural Networks</li>
                    <li>  Introduction to Tensorflow and Keras</li>
                    <li>Hands On - Working with MNIST and Fashion MNIST dataset Using Tensorflow and Keras API</li>
                </div>
            </table>

        </div>
    )}


}

export default Curriculu;