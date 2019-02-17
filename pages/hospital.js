import React, { Component }from 'react';
import {Button, Icon, Form, Container, Divider, Label, Dimmer, Loader} from 'semantic-ui-react'
import Layout from '../common/Layout';
import App from '../connection/app';

class Hospital extends Component{
    state = {
        deviceId:'',
        orgId:'',
        type:'',
        reportedAt:'',
        loading: false,
        loadingPage: true,
        minPercentage:0
    };
    componentDidMount() {
      const a = App.start();
      console.log(a);
      console.log("sacsd");
        this.setState({loadingPage: false});
      // var Percentage = App.minPercentage();
      // console.log(Percentage);
    }
    onSubmit = () => {
      this.setState({loading: true});
      // console.log(this.state.phone)
      var deviceId = this.state.deviceId;
      var orgId = this.state.orgId;
      var type = this.state.type;
      var reportedAt = this.state.reportedAt;

      console.log(typeof address);
      App.addIOTDevice(deviceId,orgId,type,reportedAt)
    };
    onSubmitPercent = () => {
      this.setState({loading: true});
      // console.log(this.state.phone)
      var minPercentage = this.state.minPercentage;
      console.log(minPercentage)

      App.changeWRCPercentage(minPercentage)

    };
    onCurrentRate = () => {
      this.setState({loading: false});
      var Percentage = App.minPercentage();

    }

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
            <Layout>
                <Container style={{padding:10}} >
                <Form >
                    <Form.Field >
                        <input type='text' focus="true" placeholder='deviceId' onChange={(e) => {this.setState({deviceId: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'  focus="true" placeholder='orgId' onChange={(e) => {this.setState({orgId: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'focus="true" placeholder='type' onChange={(e) => {this.setState({type: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field >
                        <input type='text' focus="true" placeholder='reportedAt' onChange={(e) => {this.setState({reportedAt: e.target.value})}}/>
                    </Form.Field>
                </Form>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                    <Button
                        primary
                        size='big'
                        loading={this.state.loading}
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                </div>
                </Container>
                <Container style={{padding:10}} >
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                <h2>Min Recycling Percentage For Large Industries</h2>
                </div>
                <br/>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>

                <Button
                    primary
                    size='big'
                    loading={this.state.loading}
                    onClick={this.onCurrentRate}
                >
                    Know Current Rate
                </Button>
                </div>
                </Container>
                <Container style={{padding:10}} >
                <Form >
                    <Form.Field >
                        <input type='number' focus="true" placeholder='Min Recycle Percentage' onChange={(e) => {this.setState({minPercentage: e.target.value})}}/>
                    </Form.Field>
                </Form>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                    <Button
                        primary
                        size='big'
                        loading={this.state.loading}
                        onClick={this.onSubmitPercent}
                    >
                        Submit
                    </Button>
                </div>
                </Container>
                <Container style={{padding:10}} >
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                <h2>Set Definition of Clean Water</h2>
                </div>
                <Form >
                    <Form.Field >
                        <input type='text' focus="true" placeholder='solids' onChange={(e) => {this.setState({deviceId: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'  focus="true" placeholder='BOD' onChange={(e) => {this.setState({orgId: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'focus="true" placeholder='Turbidity' onChange={(e) => {this.setState({type: e.target.value})}}/>
                    </Form.Field>

                </Form>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                    <Button
                        primary
                        size='big'
                        loading={this.state.loading}
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                </div>
                </Container>

            </Layout>
        );
    }
};
export default Hospital
