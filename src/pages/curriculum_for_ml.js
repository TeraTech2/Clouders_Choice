import React from 'react';
import '../Pages_css/Curriculum.css';


class Curriculuml extends React.Component{
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
            <h2>Machine Learning with Python Certification Curriculum</h2>
            <table>
                <tr>
                    <td> Python Machine Learning Libraries   <button onClick={this.onpy}>view</button> </td>
                   
                </tr>
                <div className={this.state.displaytype}>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li> Data Visualization Libraries</li>
                    <li> Sklearn usage</li>
                    <li>Playing with Scikit-learn, Understanding classes in Scikit-learn</li>
                </div>
                <tr>
                    <td>Machine Learning Fundamentals<button onClick={this.onpy1}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype1}>
                    <li>What is machine learning?</li>
                    <li>Data Transformation and Preprocessing</li>
                    <li>Train,Test and Validation Split</li>
                    <li> Overfitting And Underfitting</li>
                    <li>How Machine Learning works?</li>
                </div>
                <tr>
                    <td>Supervised Machine Learning algorithms<button onClick={this.onpy2}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype2}>
                    <li>Regression and Classification</li>
                    <li>K Nearest Neighbors</li>
                    <li>Natural Language Processing</li>
                    <li>Naive Bayes</li>
                    <li> Support Vector Machines and Decision Trees</li>
                </div>
                <tr>
                    <td>Unsupervised Machine Learning algorithms <button onClick={this.onpy3}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype3}>
                    <li>Clustering</li>
                    <li> Introduction to unsupervised learning</li>
                    <li>Kmeans Geometric intuition</li>
                    <li>Hierarchical Clustering</li>
                    <li>Dimensionality Reduction Techniques</li>
                </div>
                <tr>
                    <td>Reinforcement Learning  <button onClick={this.onpy4}>view</button>  </td>
                </tr>
                <div className={this.state.displaytype4}>
                    <li> Markov Decision Process</li>
                    <li> Policy and Value Function</li>
                    <li>Q-Learning</li>
                    <li>  Training Q-Learning Agent</li>
                    <li>Watching Q-Learning Play Games</li>
                </div>
            </table>

        </div>
    )}


}

export default Curriculuml;