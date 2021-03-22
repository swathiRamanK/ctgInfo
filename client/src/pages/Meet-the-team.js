import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import bigData from '../images/bigdata.jpg'
import businessAnalyst from '../images/business-analyst.jpg'
import cloudEngineer from '../images/cloudengineer.jpg'
import itConsultant from '../images/it-consultant.jpg'
import networkEngineer from '../images/networkEngineer.jpg'

function MeetTheTeam(){
    return (
        <div className ="meet-the-team">
             <h3 className="heading">MEET THE TEAM</h3>
            <CardDeck>
                <Card>
                    <Card.Img src={bigData}></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Text>
                            Big Data
                            <i className="fa fa-database"></i>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card>
                    <Card.Img src={businessAnalyst}></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Text>
                            Business Analyst
                            <i className="fa fa-home"></i>

                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card>
                    <Card.Img src={cloudEngineer}></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Text>
                            Cloud Engineer
                            <i className="fa fa-cloud"></i>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Img src={itConsultant}></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Text>
                            IT Consultant
                            <i className="fa fa-home"></i>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card>
                    <Card.Img src={networkEngineer}></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Text>
                            Network Engineer
                            <i className="fa fa-home"></i>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card>
                    <Card.Img src={cloudEngineer}></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Text>
                            Cloud Engineer
                            <i className="fa fa-cloud"></i>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        
        </div>
    )
}
export default MeetTheTeam;