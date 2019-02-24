import React from 'react'
import { Segment, Header, Grid } from 'semantic-ui-react'
const App =require('../connection/app');

class SegmentExampleRaisedSegments extends React.Component{

    state={
        meters:[{
          name:'0xd2Bd7C19D539c2F080f70Db89f6a345f6673Abe6'
        },
      ]
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
        console.log(newArr,'new');
        this.setState({meters:newArr})

      }
      getVal();
    }
    render(){
        return (
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                    <Segment.Group raised>
            <Header textAlign='center' size='huge'>All IOT Meters</Header>
            <Header textAlign='center' size='small'>Device IDs</Header>
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
