import React from 'react'
import { Segment, Header, Grid,Button,Input } from 'semantic-ui-react'
import App from '../connection/app'
class SegmentExampleRaisedSegments extends React.Component{

    state={
        meters:[{
          name:'One Meter'
        },
        {
          name:'Two Meter'
        }
      ],
      deviceId:'',
      orgId:'',
      type:'',
      reportedAt:'',
      }
      onSubmit = () => {
        var deviceId = this.state.deviceId;
        var orgId = this.state.orgId;
        var type = this.state.type;
        var reportedAt = this.state.reportedAt;

        console.log(deviceId);
        App.addIOTDevice(deviceId,orgId,type,reportedAt)
      };
    render(){
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width='2'></Grid.Column>
                    <Grid.Column width='12'>
                    <Segment.Group raised style={{padding:'50px'}}>
                        <Header textAlign='center' size='huge'>Device Authentication</Header>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input fluid placeholder='Device ID' onChange={(e) => {this.setState({deviceId: e.target.value})}} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input fluid placeholder='Organisation' onChange={(e) => {this.setState({orgId: e.target.value})}}/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input fluid placeholder='Type' type='text' onChange={(e) => {this.setState({type: e.target.value})}}/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input fluid type='Date' onChange={(e) => {this.setState({reportedAt: e.target.value})}}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row textAlign='center'>
                            <Grid.Column width={2}></Grid.Column>
                            <Grid.Column width={12} textAlign='center'>
                                <Button primary inverted onClick={this.onSubmit}>Check</Button>
                            </Grid.Column>
                            <Grid.Column width={2}></Grid.Column>
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
