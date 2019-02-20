import React from 'react'
import { Segment, Header, Grid } from 'semantic-ui-react'

class SegmentExampleRaisedSegments extends React.Component{

    state={
        meters:[{
          name:'0xd2Bd7C19D539c2F080f70Db89f6a345f6673Abe6'
        },
        {
          name:'0x96bd37f6d369B6F3c27d1102950e8870ea68C6f4'
        }
      ]
      }

    componentDidMount(){

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
