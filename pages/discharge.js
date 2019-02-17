import React, { Component }from 'react';
import {Button, Icon, Container, Dimmer, Loader, Segment, TransitionablePortal, Header, Form} from 'semantic-ui-react'
import Layout from '../common/Layout';
import { Link } from '../routes';
import App from '../connection/app';


class Discharge extends Component{

  state={
      patientAddress:'',
      open:false,
      loadingPage: true,
      loading: false,
      load: false
  };

    componentDidMount() {
        this.setState({loadingPage: false});
    }

    onSubmit = ()=>{
        this.setState({load: true});
      var patientAddress = this.state.patientAddress;
      App.discharge(patientAddress);
        this.setState({load: false});
    };

    handleClose= () => {
        this.setState({open: false});
        this.setState({loading: false});
    };

    handleOpen = () => {
        this.setState({open: true});
        this.setState({loading: false})
    };
    renderDischarge = () => {
        this.setState({loading: true});
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
            <Layout>
                    <TransitionablePortal
                        open={this.state.open}
                        onOpen={this.handleOpen}
                        onClose={this.handleClose}
                        openOnTriggerClick
                        trigger={
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 30}}>
                            <Button
                                primary
                                size='big'
                                loading={this.state.loading}
                                onClick={() => {this.setState({open: true})}}
                            >
                                Discharge Patient
                            </Button>
                            </div>
                        }
                    >
                        <Segment style={{ left: '35%', width: 500 ,position: 'fixed', top: '30%', zIndex: 1000 }}>
                            {this.renderDischarge}
                            <div>
                                <Header>Enter Patient details</Header>
                                <Form >
                                    <Form.Field >
                                        <input type='text' focus="true" placeholder='Patient Address' onChange={(e) => {this.setState({patientAddress: e.target.value})}}/>
                                    </Form.Field>
                                    <Form.Field >
                                        <Button
                                            negative
                                            style={{ flex: 1, justifyContent: 'flex-end'}}
                                            onClick={this.handleClose}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            loading={this.state.load}
                                            style={{ background: '#3fa53f', color:'#ffffff',flex: 1, justifyContent: 'flex-end'}}
                                            onClick={this.onSubmit}
                                        >
                                            Discharge
                                        </Button>
                                    </Form.Field>
                                </Form>
                            </div>
                        </Segment>
                    </TransitionablePortal>
            </Layout>
        );
    }


}
export default Discharge;
