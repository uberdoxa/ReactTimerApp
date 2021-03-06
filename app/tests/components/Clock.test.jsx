var React  = require('react');
var ReactDom  = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils  = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () =>{
 it('Shoulld exist', () => {
  expect(Clock).toExist();
 });

 describe('render', () =>{
 it('Shoulld render clock to output', () => {
  var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
  var $el = $(ReactDom.findDOMNode(clock));
  var actualText = $el.find('.clock-text').text();

  expect(actualText).toBe('01:02');

  });
 });

 describe('formatSeconds', ()=>{
    it('Should format seconds', ()=>{
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

     it('Should format seconds when min/sec are less than 10', ()=>{
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });


 });

});


