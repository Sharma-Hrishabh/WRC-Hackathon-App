import React from 'react'
import { Segment, Header, Grid } from 'semantic-ui-react'

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
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                    <Segment.Group raised>
            <Header textAlign='center' size='huge'>All IOT Meters</Header>
            {this.state.meters.map((meter,i)=>{
            return <Segment size='big' key={i} color='blue' textAlign='center'>{(i+1)+'. '+meter.name}</Segment>                
            })}
        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
            </Grid>
        
          );

    }
}

export default SegmentExampleRaisedSegments