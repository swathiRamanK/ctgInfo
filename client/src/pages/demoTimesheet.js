import React, { Component } from "react";
import moment from 'moment';
import Moment from 'react-moment';

//bootstrap import
import { Dropdown, Table } from 'react-bootstrap';


//import './App.css';

class demoTimesheet extends Component {

    constructor() {
        super();
        this.state = {
            monthObj = {
                January: 0,
                Febraury: 1,
                March: 2,
                April: 3,
                May: 4,
                June: 5,
                July: 6,
                August: 7,
                September: 8,
                October: 9,
                November: 10,
                December: 11
            },
            weekObj =[],
            tableObj =[],
            dayObj =[],
            optionItems = Object.keys(monthObj).map(item => <Dropdown.Item eventKey={monthObj.item} >{item}</Dropdown.Item>),
              start = moment([2020, 8 - 1]).startOf('month'),
             end = moment([2020, 8 - 1]).endOf('month'),

             nrofWeeks = moment.duration(end - start).weeks(),
        };
        console.log('this.props', this.props);

    }



  


render(){
return (
    <div>
        <div>
            <select id="lang" onChange={this.change} value={this.state.value}>
                <option value="select">Select</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
            </select>
            <p></p>
            <p>{this.state.value}</p>
        </div>
        <Dropdown onSelect={handleSelect} >
            <Dropdown.Toggle variant="success" id="select-month">
                Select Month
                </Dropdown.Toggle>
            <Dropdown.Menu >
                {optionItems}
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown  >
            <Dropdown.Toggle variant="success" id="select-week">
                Select Week
                </Dropdown.Toggle>
            <Dropdown.Menu >
                {weekObj}
            </Dropdown.Menu>
        </Dropdown>
        <Table>
            <thead>
                <tr>
                    {tableObj}
                </tr>
                <tr>
                    {dayObj}
                </tr>
            </thead>
            <tbody>
                <tr>

                </tr>
            </tbody>
        </Table>


    </div>
);
}
}


