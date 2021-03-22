import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, submit, weekData } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import moment from 'moment';
import Moment from 'react-moment'; //bootstrap import
import { Button, Dropdown, Table } from 'react-bootstrap'; //import './App.css';
import { Row } from 'primereact/row';
// prime ng react table 
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
//css for prime react.
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';





class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      monthObj: {
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
      yearObj: {
        2020: 20,
        2021: 21,
      },
      weekObj: [],
      tableObj: [],
      dayObj: [],
      startDate: "",
      endDate: "",
      optionItems: [],
      optionItemsYear: [],
      value: '',
      selectedMonth:'',
      // start : moment([2020, 8 - 1]).startOf('month'), 
      // end : moment([2020, 8 - 1]).endOf('month'), 
      // nrofWeeks : moment.duration(end - start).weeks()

      products: [],
      header: [],
      selectedWeek: '',
      selectedYear: '',
      selectedWeekStartDate:'',
      userName:localStorage.getItem("userName")


    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    //let weeks = []; 
    this.state.optionItems = Object.keys(this.state.monthObj).map(item => < Dropdown.Item onSelect={
      () => this.onTargetSelect(this.state.monthObj[item])
    }



      eventKey={
        this.state.monthObj.item
      } > {
        item
      } </Dropdown.Item>);

    this.state.optionItemsYear = Object.keys(this.state.yearObj).map(item => < Dropdown.Item onSelect={
      () => this.onYearSelect(this.state.yearObj[item])
    }
      eventKey={
        this.state.yearObj.item
      } > {
        item
      } </Dropdown.Item>);
    console.log('this.props', this.props);
  }


  componentWillReceiveProps(props) {
    console.log('props component will receive', props);
    let value = Object.values(props.auth.user.data);
    let updateRow = {
      "Sunday": value[0] ? value[0] : '0',
      "Monday": value[1] ? value[1] : '0',
      "Tuesday": value[2] ? value[2] : '0',
      "Wednesday": value[3] ? value[3] : '0',
      "Thursday": value[4] ? value[4] : '0',
      "Friday": value[5] ? value[5] : '0',
      "Saturday": value[6] ? value[6] : '0',
    };
    console.log('updateRow', updateRow)
    this.state.products[1] = updateRow
  }


  onTargetSelect = function (item) {
    this.state.selectedMonth = Object.keys(this.state.monthObj).find(key => this.state.monthObj[key] === item);
    this.state.weekObj = this.state.weekObj ? [] : '';
    let newDate = moment().year() + '-' + (item + 1) + '-01';
    let weeks = [];
    this.state.startDate = moment('' + newDate).startOf('week').format('YYYY-MM-DD');
    this.state.endDate = moment('' + newDate).endOf('month').format('YYYY-MM-DD');
    console.log('weeksaaaa:', this.state.startDate, this.state.endDate);
    while (this.state.startDate <= this.state.endDate) {
      weeks.push(<Dropdown.Item onSelect={(event) => this.selectedWeek(event)}
        eventKey={this.state.startDate}>{this.state.startDate}</Dropdown.Item >);
      this.state.startDate = moment(this.state.startDate).add(7, 'days').format('YYYY-MM-DD');
    }
    console.log(weeks)
    this.setState({
      weekObj: weeks
    });
  }
  selectedWeek = function (week) {
    console.log('ll', week, this.state.columns, moment(week).week());

    this.setState({
      selectedWeek: moment(week).week(),
      selectedWeekStartDate:week
    });
    let respose = [];
    let emptyRow = {
      "Sunday": "0",
      "Monday": "0",
      "Tuesday": "0",
      "Wednesday": "0",
      "Thursday": "0",
      "Friday": "0",
      "Saturday": "0",
    };
    let data = week;
    let i = 1;
    let days = [{
      "Sunday": "",
      "Monday": "",
      "Tuesday": "",
      "Wednesday": "",
      "Thursday": "",
      "Friday": "",
      "Saturday": "",
    }];
    days[0]['Sunday'] = data;
    respose.push(data);
    let dynamicColumns = [];

    //days.push(data);
    // row.dataField = ''+data;
    // row.text = ''+data; 
    // this.state.columns[0] = row;
    while (i <= 6) {
      let c = 1
      let dateString = moment(data).add(1, 'days').format('YYYY-MM-DD');
      let dayString = moment(data).add(1, 'days').format('dddd');
      respose.push(dateString);
      days[0][dayString] = dateString;
      console.log(days);
      // row.dataField = ''+daysString;
      // row.text = ''+daysString; 
      // this.state.columns[c] = row;
      data = moment(data).add(1, 'days').format('YYYY-MM-DD');
      i++;
      c++;

    }
    days[1] = emptyRow;

    console.log('hehe11', days);

    console.log('hehe', dynamicColumns);
    this.setState({
      products: days
    });

    // this.onLoad();
    // console.log('days', days, this.state.dayObj);
  }

  onYearSelect = (e) => {
    this.setState({ selectedYear: e })
  }
  handleSelect = (e) => {
    console.log(e);
    // setValue(e) 
  }
  onKeyUpValue = (e) => {
    console.log("ee", e)
    if (e.key === 'Enter') {
      console.log('do validate', e);
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  keyPress(e, d) {
    console.log(e, d)
    if (e.keyCode == 13) {
      console.log('value', e.target.value);
      // put the login here
    }
  }

  inputTextEditor(productKey, props, field) {
    return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(productKey, props, e.target.value)} />;
  }
  codeEditor(productKey, props) {
    return this.inputTextEditor(productKey, props, 'code');
  }
  onEditorValueChange(productKey, props, value) {
    console.log('props11', props)
    console.log()
    let updatedProducts = [...props.value];
    console.log('updatedProducts', updatedProducts, props);
    updatedProducts[props.rowIndex][props.field] = value;
    this.setState({ [`${productKey}`]: updatedProducts });
    console.log('as', this.state.products);
  }

  onSubmit = e => {

    let count = 0;
    console.log('submit', this.state.products[1])

    if (this.state.products[1] === undefined) {
      this.toast.show({ severity: 'error', summary: 'Error!', detail: 'Select Data to Submit' });
    }
    else {
      Object.keys(this.state.products[1]).forEach(e => {
        if (Number(this.state.products[1][e]) !== 0 && Number(this.state.products[1][e]) !== 8) {
          console.log("Number(this.state.products[1][e])", Number(this.state.products[1][e]))
          count++;
        }
      })

      if (count > 0) {
        this.toast.show({ severity: 'error', summary: 'Error!', detail: 'Hours should be either 8 or 0' });
      } else {

        this.toast.show({ severity: 'success', summary: 'Success Message', detail: 'Timesheet Submitted for selected week' });
        const email = localStorage.getItem("userEmail");
        const data = {};
        Object.keys(this.state.products[0]).forEach(element => {
          let date = this.state.products[0][element];
          data[date] = this.state.products[1][element];
        });
        let userData = {
          data: data,
          email: email,
          selectedWeek: this.state.selectedWeek,
          selectedYear: this.state.selectedYear
        }

        const res = this.props.submit(userData);
      }
    }
  }
  onLoad = e => {

    if (this.state.selectedWeek && this.state.selectedYear) {

      const email = localStorage.getItem("userEmail");

      let userData = {
        email: email,
        selectedWeek: this.state.selectedWeek,
        selectedYear: this.state.selectedYear
      }

      this.props.weekData(userData);
    } else {
      this.toast.show({ severity: 'error', summary: 'Error!', detail: 'Select Data to Load' });
    }



  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };






  handleDateSelect = ({ selectionInfo: ev }) => {

    console.log(ev)
    // openAppointment is a function I wrote to open a form to edit that appointment
    console.log('kkk');
  }




  render() {

    // const { user } = localStorage.getItem("userName");
    const name = localStorage.getItem("userName");
    const events = [{ title: "", date: '' }];

    return (
      <div className="demoTimesheet" >

        <Toast ref={(el) => this.toast = el} />
        <div className="timesheet-page margin15" >

          <h4>
            {this.state.userName}!
              Here is your time sheet space
              <Button className="float-right" variant="primary" onClick={this.onLogoutClick}>Logout</Button>
          </h4>

          {/* timesheet section */}
        </div>

        <Dropdown className="margin15">
          <Dropdown.Toggle variant="success"
            id="select-year" > Select Year
  </Dropdown.Toggle>
          <Dropdown.Menu > {
            this.state.optionItemsYear
          } </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="margin15">
          <Dropdown.Toggle variant="success"
            id="select-month" > Select Month
  </Dropdown.Toggle>
          <Dropdown.Menu > {
            this.state.optionItems
          } </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="margin15">
          <Dropdown.Toggle variant="success"
            id="select-week" > Select Week
  </Dropdown.Toggle >
          <Dropdown.Menu> {
            this.state.weekObj
          } </Dropdown.Menu> </Dropdown >

        <Button variant="primary" className="margin15" onClick={this.onLoad}>Load</Button>
        <Button variant="primary" className="margin15" onClick={this.onSubmit}>Submit</Button>
        {/* <span>Selected week - {this.state.selectedWeek}</span> */}

        <div className="margin6L12R">
          <p >Selected Year - {this.state.selectedYear ? '20' + this.state.selectedYear : '' }</p>
          <p>Selected Month - {this.state.selectedMonth}</p>
        <p>Selected week - {this.state.selectedWeekStartDate}   {this.state.selectedWeek ? '-'+ this.state.selectedWeek +'/52' :''}</p>
          
        </div>
        <div className="card margin15">
          <DataTable value={this.state.products} editMode="cell" className="editable-cells-table " >
            <Column field="Sunday" header="Sunday"></Column>
            <Column field="Monday" header="Monday" editor={(props) => this.codeEditor('products', props)}></Column>
            <Column field="Tuesday" header="Tuesday" editor={(props) => this.codeEditor('products', props)}></Column>
            <Column field="Wednesday" header="Wednesday" editor={(props) => this.codeEditor('products', props)}></Column>
            <Column field="Thursday" header="Thursday" editor={(props) => this.codeEditor('products', props)}></Column>
            <Column field="Friday" header="Friday" editor={(props) => this.codeEditor('products', props)}></Column>
            <Column field="Saturday" header="Saturday"></Column>
          </DataTable>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  weekData: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,// TODO - made its as string from object
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  
});
export default connect(
  mapStateToProps,
  { logoutUser, weekData, submit }
)(Dashboard);