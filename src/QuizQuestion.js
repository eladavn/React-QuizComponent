import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {incorrectAnswer: false};
    }

    handleClick(buttonText) {
        console.log("handleClick");
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({incorrectAnswer: false});
            console.log("false");
            this.props.showNextQuestionHandler();
        }
        else {
            console.log("true");
            this.setState( {incorrectAnswer: true} );
        }
    }

    render() {
        return (
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    {
                        this.props.quiz_question.answer_options.map( (option,index) => 
                            <QuizQuestionButton key={index} button_text={option} clickHandler={this.handleClick.bind(this)}/>)
                    }
                </ul>
                </section>
                {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> :  
                            null  }
            </main>
        );
    }

};

export default QuizQuestion;