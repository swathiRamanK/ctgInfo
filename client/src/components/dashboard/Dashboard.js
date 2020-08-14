import React, { Component } from "react";


import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// calender import
import FullCalendar, { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate,ViewApi} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils.js'



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  
 


  handleDateSelect= ({selectionInfo:ev}) => {

    console.log(ev)
    // openAppointment is a function I wrote to open a form to edit that appointment
    console.log('kkk');
}

handleDateSelect = (selectInfo: DateSelectArg) => {

  console.log('selectInfo',selectInfo);
  let title = prompt('Please enter your logged hours')
  let calendarApi = selectInfo.view.calendar

  calendarApi.unselect() // clear date selection

  if (title) {

    console.log('calendarApi',calendarApi)
    calendarApi.addEvent(
      /*{
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    },*/
    {
      id: createEventId(),
      title,
      start: calendarApi.view.currentStart,
      end:calendarApi.view.currentEnd,
      allDay: selectInfo.allDay
    })
  }
}



  render() {


    const { user } = this.props.auth;

    const events = [{ title: "", date:''}];



    return (
      <div className="timesheet-page" >

        <h4>
          {user.name.split(" ")[0]}!
              Here is your time sheet space
            </h4>
        <Button variant="primary" onClick={this.onLogoutClick}>Logout</Button>

        {/* timesheet section */}

        <div className="calender-section">
          {/* <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin, interactionPlugin]}
            editable={true}
            dateClick ={this.handleEventClick}
            select={this.handleDateSelect}

          /> */}

<FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            dateClick ={this.handleEventClick}
           // eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            events={events}
            viewSkeletonRender={info => { this.callbackFunction(info) } }
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>



        {/* 
                    eventDrop={this.handleEventDrop}
                    eventClick={this.handleEventClick}
                    events={this.formatEvents()} */}
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);