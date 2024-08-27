import React, { Component } from 'react';
import './App.css';
import Customer from './component/Costomer';

const customers = [
  {
  'id' : '1',
  'image' : 'https://placeimg.com/640/480/any',
  'name' : '장원',
  'birthday' : '971008',
  'gender' : '남자',
  'job' : '대학생'
},  
{
  'id' : '2',
  'image' : 'https://placeimg.com/640/480/any',
  'name' : '장종대',
  'birthday' : '570402',
  'gender' : '남자',
  'job' : '백수'
},  
{
  'id' : '3',
  'image' : 'https://placeimg.com/640/480/any',
  'name' : '최미경',
  'birthday' : '640103',
  'gender' : '여자',
  'job' : '주부'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
          })
        }
      </div>
    );
  }
}

export default App;
