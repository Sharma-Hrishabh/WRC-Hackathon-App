import React from 'react'
import { Segment, Header,Form,Radio,Grid,Input,Button } from 'semantic-ui-react'

class SegmentExampleRaisedSegments extends React.Component{

    state = {value:'1'}

    handleChange = (e, { value }) => this.setState({ value })
    
    render(){
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width='2'></Grid.Column>
                    <Grid.Column width='12'>
                    <Segment.Group raised style={{padding:'50px'}}>
                        <Header textAlign='center' size='huge'>IOT Anamoly</Header>
                        <Grid textAlign='center'>
                            <Grid.Row columns='3' divided style={{fontSize:'40px',fontWeight:'700'}}>
                                <Grid.Column>
                                <Form.Field>
                                    <Radio
                                        label='Continuous Weighted Average'
                                        name='radioGroup'
                                        value='1'
                                        checked={this.state.value === '1'}
                                        onChange={this.handleChange}
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
                                    />
                                    </Form.Field>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row textAlign='center'>
                            <Grid.Column width='4'></Grid.Column>
                                <Grid.Column width='8'>
                                    <Input placeholder='Maximum Acceptable Volume' fluid />                                    
                                </Grid.Column>
                            <Grid.Column width='4'></Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row textAlign='center'>
                            <Grid.Column width='4'></Grid.Column>
                                <Grid.Column width='8'>
                                    <Button primary>Submit</Button>                                  
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