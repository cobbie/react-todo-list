import React, { Component } from 'react';
import logo from './logo.svg';


class Marga {
  constructor(name){
    this.name = name
  }

  changeTheWorld =() =>{
    console.log('change the world!')
  }
}

class MargasMinion extends Marga{
  constructor(name, job){
    super(name);
    this.job = job
  }
}
class App extends Component {
  render() {
    // javascript objects
    const marga = {
          situation: 'applying',
          skills() {
            console.log('cHaNgEtHeWoRlD');
          },
          classes: ['teleseryes', 'translation'],
          numClasses: ['teleseryes', 'translation'].length
    
    }
    // objects in list / arrow functions
    const margasOpportunities = [
      {job: 'WeGen', industry: 'energy'},
      {job: 'campaignLord', industry: 'politics'},
      {job: 'professor?!', industry:'academe'}

    ]
    const classes = ['asdf','asfdasdf']
    const times = ['12:30','11:00']
    const {situation: st, classes: cls, numClasses: numcls} = marga;

    const schedules = [...classes, ...times, ]

    const margaV = new Marga('ThaRealMargaVillan');
    const margasClone = new MargasMinion('marga\'s clone','law enforcer politician for the orphans')
    return (
      <div>
        {console.log(marga.skills())}
        {console.log(marga.situation)}
        {console.log(marga.numClasses)}
        {console.log(marga.classes[1])}

        {console.log(margasOpportunities.filter(item => item.job === 'campaignLord'))}
        {console.log('----------------')}
        {console.log(st)}
        <ul>
        {classes.map(cls => <li> cls </li>)}
        </ul>

        {console.log(schedules)}
        {margasClone.changeTheWorld()}
      </div>
    );
  }
}

export default App;
