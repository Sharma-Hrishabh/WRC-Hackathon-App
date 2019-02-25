import React from 'react'
import { Segment, Header, Grid, Divider } from 'semantic-ui-react'
const App =require('../connection/app');

class SegmentExampleRaisedSegments extends React.Component{

    state={
        meters:[]
      }

    componentDidMount(){
      let getVal=async ()=>{
        let val=await App.getauthorisedIOTs();
        // this.setState({meters:[...this.state.meters,val]})
        console.log(val,'state');
        var newArr=[];
        val.map(IOT => {
          var json = {};
          json['name']=IOT;
          newArr.push(json);
        })
        this.setState({meters:newArr})

      }
      getVal();
    }
    render(){
        return (
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={10}>
                    <Segment.Group raised>
            <Header textAlign='center' size='huge'>All IOT Meters</Header>
            <Divider></Divider>
            <Header textAlign='center' size='small'>Device IDs</Header>
            {this.state.meters.length==0 && <Segment size='big' color='blue' textAlign='center'>No Devices Yet</Segment>}
            {this.state.meters.map((meter,i)=>{
            return <Segment size='big' key={i} color='blue' textAlign='center'>{(i+1)+'. '+meter.name}</Segment>
            })}
        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
            </Grid>

          );

    }
}

export default SegmentExampleRaisedSegments
