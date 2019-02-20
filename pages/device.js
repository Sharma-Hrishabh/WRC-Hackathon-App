import React from 'react'
import { Segment, Header, Grid,Button,Input } from 'semantic-ui-react'

class SegmentExampleRaisedSegments extends React.Component{

    state={
        meters:[{
          name:'One Meter'
        },
        {
          name:'Two Meter'
        }
      ]
      }
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
                                    <Input fluid placeholder='Device ID' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input fluid placeholder='Organisation' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input fluid placeholder='Type' type='text' />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Input fluid type='Date' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row textAlign='center'>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Button primary>Primary</Button>
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
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