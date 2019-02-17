import React, { Component }from 'react';
import {Button, Icon, Container, Dimmer, Loader, TransitionablePortal, Header, Segment, Form} from 'semantic-ui-react'
import Layout from '../common/Layout';
import App from '../connection/app';
import {geolocated} from 'react-geolocated';
class Index extends Component{
    state={
        msg:'',
        name: '',
        phone: '',
        speciality:0,
        open:false,
        loadingPage: true,
        loading: false
    };
    handleClose= () => {
        this.setState({open: false});
        this.setState({loading: false});
    };

    handleOpen = () => {
        this.setState({open: true});
        if(!this.props.isGeolocationAvailable){
            console.log("Your browser does not support Geolocation");
            return;
        }
        this.setState({loading: false})
    };
    onReport = () => {
        this.setState({open: true, loading: true});
        var fullName = this.state.name;
        var phone = this.state.phone;
        var speciality = this.state.speciality;
        var tempLocation = "100x80";
        var res = App.addPatient(tempLocation,phone,speciality,fullName);
        // this.setState({ msg: res.error});
    };

    componentDidMount() {
        const a = App.start();
        this.setState({loadingPage: false});
    }
    renderEmergency = () => {
        if(this.props.isGeolocationEnabled)
            return(
                <div>
              <Header>Report an Emergency</Header>
              <Form >
                  <Form.Field>
                      <input type='text' focus="true" placeholder='Full Name' onChange={(e) => {this.setState({name: e.target.value})}}/>
                  </Form.Field>
                  <Form.Field >
                      <input type='text' focus="true" placeholder='Phone Number' onChange={(e) => {this.setState({phone: e.target.value})}}/>
                  </Form.Field>
                  <Form.Field >
                      <input type='text' focus="true" placeholder='Speciality' onChange={(e) => {this.setState({speciality: e.target.value})}}/>
                  </Form.Field>
                  <Form.Field >
                      <Button
                          loading={this.state.loading}
                          negative
                          style={{ flex: 1, justifyContent: 'flex-end'}}
                          onClick={this.handleClose}
                      >
                          Cancel
                      </Button>
                      <Button
                           loading={this.state.loading}
                           style={{ background: '#3fa53f', color:'#ffffff',flex: 1, justifyContent: 'flex-end'}}
                           onClick={this.onReport}
                      >
                          Report
                      </Button>
                  </Form.Field>
              </Form>
          </div>
            );
        else if(!!this.state.msg)
            return(
                <div>
                    <Header>{this.state.msg}</Header>
                    <Form >
                        <Form.Field>
                            <Button
                                style={{ background: '#3fa53f', color:'#ffffff',flex: 1, justifyContent: 'flex-end'}}
                                onClick={this.handleClose}
                            >
                                OK
                            </Button>
                        </Form.Field>
                    </Form>
                </div>
            );
        else {
            return(
                <div>
                    <Header>Please Give Location Permission for better reachability.</Header>
                    <Form >
                        <Form.Field>
                            <Button
                                style={{ background: '#3fa53f', color:'#ffffff',flex: 1, justifyContent: 'flex-end'}}
                                onClick={this.handleClose}
                            >
                                OK
                            </Button>
                        </Form.Field>
                    </Form>
                </div>
            );
        }
    };

    render() {
        if(this.state.loadingPage){
            return(
                <Layout>
                <Dimmer active inverted>
                    <Loader size='massive'>Hang On...</Loader>
                </Dimmer>
                </Layout>
            );
        }
        return (
            <div style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundImage: 'url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/tHF1OBF/4k-medical-team-running-through-hospital-building-responding-to-an-emergency_4pf4s-v09g__F0000.png)'
            }} class="te">
            <Layout>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 300 }}>
                    <TransitionablePortal
                        open={this.state.open}
                        onOpen={this.handleOpen}
                        onClose={this.handleClose}
                        openOnTriggerClick
                        trigger={
                            <Button
                                negative
                                size='big'
                                loading={this.state.loading}
                                onClick={() => {this.setState({open: true})}}
                            > <Icon name='emergency'/>
                                Emergency
                            </Button>
                        }
                        >
                    <Segment style={{ left: '35%', width: 500,position: 'fixed', top: '30%', zIndex: 1000 }}>
                        {this.renderEmergency()}
                    </Segment>
                </TransitionablePortal>
                </div>
            </Layout>
            </div>
        );
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 1000,
})(Index);
