import React from 'react'
import { Segment, Header, Grid, Button,Input } from 'semantic-ui-react'

class SegmentExampleRaisedSegments extends React.Component{

    state={
        sale:{},
        industry:{}
      }

    handleChangesale=(field,e)=>{
        let sale={...this.state.sale};
        sale[field]=e.target.value;
        this.setState({sale});
    }
    handleChangeindustry=(field,e)=>{
        let industry={...this.state.sale};
        industry[field]=e.target.value;
        this.setState({industry});
    }
    render(){
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                    <Segment.Group raised>
                        <Header textAlign='center' size='huge'>Token Transfer</Header>
                        <Grid>
                            <Grid.Row >
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12} textAlign='center'>
                                    <Header textAlign='center' size='large'>Transfer token to sale</Header>
                                    <Input style={{margin:'10px'}} fluid placeholder='Sale contract Address' onChange={(e)=>this.handleChangesale('address',e)} />
                                    <Input style={{margin:'10px'}} fluid placeholder='Number of Tokens' onChange={(e)=>this.handleChangesale('number',e)} />
                                    <Button style={{margin:'10px'}} secondary inverted>Make Transaction</Button>
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12} textAlign='center'>
                                    <Header textAlign='center' size='large'>Transfer token to industry</Header>
                                    <Input style={{margin:'10px'}} fluid placeholder='Industry contract Address' onChange={(e)=>this.handleChangeindustry('address',e)} />
                                    <Input style={{margin:'10px'}} fluid placeholder='Number of Tokens' onChange={(e)=>this.handleChangesaleindustry('number',e)} />
                                    <Button style={{margin:'10px'}} secondary inverted>Make Transaction</Button>
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
            </Grid>
        
          );

    }
}

export default SegmentExampleRaisedSegments