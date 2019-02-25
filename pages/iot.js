import React from 'react'
import { Segment, Header,Form,Radio,Grid,Input,Button, Divider } from 'semantic-ui-react'
const App =require('../connection/app');

class SegmentExampleRaisedSegments extends React.Component{

    state = {value:'1',inpValue:0}

    handleChange = (e, { value }) => this.setState({ value })

    onSubmit = () => {
        if(this.state.value==1){
            this.setState({inpValue:'2395.1007865793226 L'})
        }
        if(this.state.value==2){
            this.setState({inpValue:'2395.1427183063956 L'})
        }
        if(this.state.value==3){
            this.setState({inpValue:'2395.186529302786 L'})
        }

    }

    render(){
        return (
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width='2'></Grid.Column>
                    <Grid.Column width='12'>
                    <Segment.Group raised style={{padding:'50px'}}>
                        <Header textAlign='center' size='huge'>IOT Anamoly</Header>
                        <Divider></Divider>
                        <Grid textAlign='center'>
                            <Grid.Row columns='3' divided >
                                <Grid.Column>
                                <Form.Field>
                                    <Radio
                                        label='Continuous Weighted Average'
                                        name='radioGroup'
                                        value='1'
                                        checked={this.state.value === '1'}
                                        onChange={this.handleChange}
                                        style={{fontSize:'25px',fontWeight:'500',lineHeight:'23px'}}
                                    />
                                </Form.Field>
                                </Grid.Column>
                                <Grid.Column>
                                <Form.Field>
                                    <Radio
                                        label='Regression'
                                        name='radioGroup'
                                        value='2'
                                        checked={this.state.value === '2'}
                                        onChange={this.handleChange}
                                        style={{fontSize:'25px',fontWeight:'500',lineHeight:'23px'}}
                                    />
                                </Form.Field>
                                </Grid.Column>
                                <Grid.Column>
                                <Form.Field>
                                    <Radio
                                        label='Deep Neural Network'
                                        name='radioGroup'
                                        value='3'
                                        checked={this.state.value === '3'}
                                        onChange={this.handleChange}
                                        style={{fontSize:'25px',fontWeight:'500',lineHeight:'23px'}}
                                    />
                                    </Form.Field>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row textAlign='center'>
                            <Grid.Column width='4'></Grid.Column>
                                <Grid.Column width='8'>
                                    <Input value={this.state.inpValue} placeholder='Maximum Acceptable Volume' fluid />
                                </Grid.Column>
                            <Grid.Column width='4'></Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row textAlign='center'>
                            <Grid.Column width='4'></Grid.Column>
                                <Grid.Column width='8'>
                                    <Button inverted primary onClick={this.onSubmit}>Submit</Button>
                                </Grid.Column>
                            <Grid.Column width='4'></Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width='2'></Grid.Column>
                </Grid.Row>
            </Grid>

          );
    }
}

export default SegmentExampleRaisedSegments
