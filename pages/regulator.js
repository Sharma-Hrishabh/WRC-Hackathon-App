import React from 'react'
import { Segment, Header, Grid, Input,Label, Button } from 'semantic-ui-react'
import App from '../connection/app';
class SegmentExampleRaisedSegments extends React.Component{

    state={
        lichange:{},
        ulchange:{}
    }
    handleWrcChange=(e)=>{
        if(!isNaN(e.target.value)){
        this.props.wrc(e.target.value);
    }
}

    handleChangeli=(field,e)=>{
        let lichange={...this.state.lichange};
        lichange[field]=e.target.value;
        this.setState({lichange});
    }
    handleChangeul=(field,e)=>{
        let ulchange={...this.state.ulchange};
        ulchange[field]=e.target.value;
        this.setState({ulchange});
    }
    render(){
        return (
        <Segment.Group raised>
            <Header size='huge' textAlign='center'>Regulator Dashboard</Header>
            <Grid>
                <Grid.Row>
                    <Grid.Column width='5'>
                        <Header size='large' textAlign='center'>Large Industries</Header>
                        <Label color='red' horizontal>
                        pH
                        <Input placeholder='pH' onChange={(e)=>this.handleChangeli('ph',e)} />
                        </Label>
                        <Input placeholder='solids' onChange={(e)=>this.handleChangeli('ph',e)} />
                        <Input placeholder='hardness' onChange={(e)=>this.handleChangeli('ph',e)}/>
                        <Input placeholder='Oil' onChange={(e)=>this.handleChangeli('ph',e)} />
                        <Input placeholder='BoD' onChange={(e)=>this.handleChangeli('ph',e)}/>
                        <Input placeholder='min % Recycle' onChange={(e)=>this.handleChangeli('ph',e)} />
                        <Button primary>Primary</Button>

                    </Grid.Column>
                    <Grid.Column width='5'>
                    <Header size='large' textAlign='center'>Urban Local Bodies</Header>
                    <Input placeholder='Search...' onChange={(e)=>this.handleChangeul('ph',e)} />
                        <Input placeholder='Search...' onChange={(e)=>this.handleChangeul('ph',e)} />
                        <Input placeholder='Search...' onChange={(e)=>this.handleChangeul('ph',e)}/>
                        <Input placeholder='Search...' onChange={(e)=>this.handleChangeul('ph',e)}/>
                        <Input placeholder='Search...' onChange={(e)=>this.handleChangeul('ph',e)}/>
                        <Button primary>Primary</Button>

                    </Grid.Column>
                    <Grid.Column width='6'>
                    <Header size='large' textAlign='center'>WRC Rate</Header>
                    <Input placeholder='Search...' onChange={this.handleWrcChange} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment.Group>
          );

    }
}

export default SegmentExampleRaisedSegments
