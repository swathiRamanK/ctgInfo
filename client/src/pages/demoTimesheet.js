import React, {
    Component
} from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { submit } from "../actions/authActions";
import { weekData } from "../actions/authActions";
import moment from 'moment';
import Moment from 'react-moment'; //bootstrap import
import {
    Button,
    Dropdown,
    Table
} from 'react-bootstrap'; //import './App.css';

import { Row } from 'primereact/row';



// prime ng react table 
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
//css for prime react.
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


class demoTimesheet extends Component {
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
            weekObj: [],
            tableObj: [],
            dayObj: [],
            startDate: "",
            endDate: "",
            optionItems: [],
            value: '',
            // start : moment([2020, 8 - 1]).startOf('month'), 
            // end : moment([2020, 8 - 1]).endOf('month'), 
            // nrofWeeks : moment.duration(end - start).weeks()

            products: [],
            header: [],
            selectedWeek: ''


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
            } </Dropdown.Item>); console.log('this.props', this.props);
    }


    componentWillReceiveProps(props) {
        let value = Object.values(props.auth.user.data);
        let updateRow = {
            "Sunday": value[0],
            "Monday": value[1],
            "Tuesday": value[2],
            "Wednesday": value[3],
            "Thursday": value[4],
            "Friday": value[5],
            "Saturday": value[6],
        };
        console.log('updateRow',updateRow)
        this.state.products[1] = updateRow
    }


    onTargetSelect = function (item) {
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
            selectedWeek: moment(week).week()
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

        // console.log('days', days, this.state.dayObj);
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
        console.log('code editor', productKey, props);
        return this.inputTextEditor(productKey, props, 'code');
    }
    onEditorValueChange(productKey, props, value) {
        let updatedProducts = [...props.value];
        console.log('updatedProducts', updatedProducts, props);
        updatedProducts[props.rowIndex][props.field] = value;
        this.setState({ [`${productKey}`]: updatedProducts });
        console.log('as', this.state.products);
    }

    onSubmit = e => {
        const email = localStorage.getItem("userEmail");
        const data = {};
        Object.keys(this.state.products[0]).forEach(element => {
            let date = this.state.products[0][element];
            data[date] = this.state.products[1][element];
        });
        let userData = {
            data: data,
            email: email,
            selectedWeek: this.state.selectedWeek
        }

        const res = this.props.submit(userData);
     

    }
    onLoad = e => {
        const email = localStorage.getItem("userEmail");
        
        let userData = {
            email: email,
            selectedWeek: this.state.selectedWeek
        }

        this.props.weekData(userData);
      

    }

    render() {
        return (
            <div className="demoTimesheet" >
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
                <span>Selected week - {this.state.selectedWeek}</span>

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

demoTimesheet.propTypes = {
    weekData: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired // TODO - made its as string from object
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

console.log(mapStateToProps)
export default connect(
    mapStateToProps,
    { weekData,submit }
)(withRouter(demoTimesheet));
// export default demoTimesheet;
