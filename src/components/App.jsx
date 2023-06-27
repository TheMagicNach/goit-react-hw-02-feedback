import { Component } from "react"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Title } from "./Title/Title";
import { Statistic } from "./Statistic/Statistic"
import { Notification } from "./Notifications/Notification";
export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  };


    handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
    countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
    <div>
        <Title title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onFeedBackbtn = {this.handleFeedback}
        />
        </Title>

      {total > 0 ? (
        <Title title='Statistics'>
          <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total }
              positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Title>
       ) : (
          <Notification message="There is no feedback" />
        )}

    </div>
    )}}