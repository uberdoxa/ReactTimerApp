var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

// var CountdownForm = require('CountdownForm');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },componentDidUpdate: function(prevProps,prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
        this.handleStart();
        break;
        case "stopped":
        this.setState({count:0});
        case "paused":
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  handleStart: function(){
    this.timer  = setInterval(()=>{
      this.setState({
        count: this.state.count +1
      });
    },1000);
  },
  handleStatusChange: function(newTimerStatus){
    console.log(newTimerStatus);
    this.setState({timerStatus: newTimerStatus});
  },
  render: function(){
    var {count, timerStatus}= this.state;

    return(
      <div>
      <h1 className="page-title">Timer App</h1>
      <Clock totalSeconds={count}/>
      <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>)
  }

});

module.exports = Timer;


//var Timer = React.createClass({

//   getInitialState: function(){
//     return {
//       count: 0,
//       countdownStatus: 'stopped'
//     };
//   },
//   componentDidUpdate: function(prevProps, prevState){
//     if(this.state.countdownStatus !== prevState.countdownStatus){
//       switch(this.state.countdownStatus){
//         case 'started':
//           this.startTimer();
//         break;
//         case 'stopped':
//           this.setState({count: 0});
//         case 'paused':
//           clearInterval(this.timer);
//           this.timer= undefined;
//           break;
//       }
//     }
//   },
//   componentWillUnmount: function(){
//     clearInterval(this.timer);
//     this.timer  = undefined;
//   },
//   startTimer: function(){
//     this.timer = setInterval(()=>{
//       var newCount = this.state.count +1;
//       this.setState({
//         count: newCount
//       });
//       if(newCount=== 0){
//         this.setState({countdownStatus: "stopped"});
//       }
//     },1000);
//   },
//   handleSetCountdown: function (seconds){
//     this.setState({
//       count: seconds,
//       countdownStatus: 'started'
//     });
//   },
//   handleStatusChange: function(newStatus){
//     this.setState({countdownStatus : newStatus});
//   },
//   render: function(){
//     var {count,countdownStatus} = this.state;
//     var renderControlArea = () =>{
//       // if (countdownStatus !== 'stopped'){
//         return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
//       // }else{
//         // return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
//       // }
//     }

//     return(
//       <div>
//       <h1 className="page-title">Timer App</h1>
//       <Clock totalSeconds={count}/>
//       {renderControlArea()}
//       </div>
//       )
//   }

// });

// module.exports = Timer;
