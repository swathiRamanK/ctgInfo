import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import bigData from '../images/bigdata.jpg'
import businessAnalyst from '../images/business-analyst.jpg'
import cloudEngineer from '../images/cloudengineer.jpg'
import itConsultant from '../images/it-consultant.jpg'
import networkEngineer from '../images/networkEngineer.jpg'

function MeetTheTeam() {
    return (
        <div className="meet-the-team">
            <h3 className="heading">MEET THE TEAM</h3>
            <CardDeck>
                <Card>
                    <Card.Img src={bigData}></Card.Img>
                    <Card.Body className="bodyCard padding0">
                        <Card.Title className="titleCard"> Data Engineer
                            <i className="fa fa-database"></i></Card.Title>
                        <Card.Text>
                            While data science and data scientists in particular are concerned with exploring data, finding insights in it, and building machine learning algorithms, data engineering cares about making these algorithms work on a production infrastructure and creating data pipelines in general. So, a data engineer is an engineering role within a data science team or any data related project that requires creating and managing technological infrastructure of a data platform.
      </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                <Card.Img src={businessAnalyst}></Card.Img>
                    <Card.Body className="bodyCard padding0">
                        <Card.Title className="titleCard"> Information Analyst
                            <i className="fa fa-home"></i></Card.Title>
                        <Card.Text>
                        Information analysts are primarily concerned with conducting analysis, developing information systems, and generating accurate and comprehensive reports on operational data.They are required to cooperate and communicate well with other personnel across departments in order to explain and assist in the integration of information management and data communication systems.      </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                <Card.Img src={cloudEngineer}></Card.Img>
                    <Card.Body className="bodyCard padding0">
                        <Card.Title className="titleCard">Cloud Engineer
                            <i className="fa fa-cloud"></i></Card.Title>
                        <Card.Text>
                        A Cloud Engineer is an IT professional responsible for a number of  technological responsibilities under Cloud Computing.Here are some of the responsibilities of a Cloud Engineer - 

Maintenance and support,
Management,
Planning, design and development of an application on Cloud.Nowadays Cloud Service Providers have a lot of services to offer. This means whether you are a Game Developer or a Management Consultant, there is something you can do using the Cloud. Because the Cloud is everywhere.     </Card.Text>
                    </Card.Body>

                </Card>
               
            </CardDeck>


        </div>
    )
}
export default MeetTheTeam;