import React from 'react'
import { Segment, Header, Grid, Input,Label, Button } from 'semantic-ui-react'
import App from '../connection/app';
class SegmentExampleRaisedSegments extends React.Component{

    state={
        lichange:{},
        ulchange:{}
    }

    componentDidMount(){
      // var price=App.tokenPrice();
      // console.log(price);
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
        // console.log(lichange)

    }
    handleChangeul=(field,e)=>{
        let ulchange={...this.state.ulchange};
        ulchange[field]=e.target.value;
        this.setState({ulchange});
    }

    onSubmitli = () => {
      var li= this.state.lichange;
      console.log(li.ph);
      App.defineWaterSpecsIndus(li.ph,li.solids,li.hardness,li.oil,li.bod,li.minPercentageIndus)
    }
    onSubmitul = () => {
      var ul= this.state.lichange;
      console.log(ul.ph);
      App.defineWaterSpecsLocal(ul.ph,ul.soulds,ul.hardness,ul.oil,ul.bod,ul.minPercentageLocal)
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
                        <Input placeholder='solids' onChange={(e)=>this.handleChangeli('solids',e)} />
                        <Input placeholder='hardness' onChange={(e)=>this.handleChangeli('hardness',e)}/>
                        <Input placeholder='Oil' onChange={(e)=>this.handleChangeli('oil',e)} />
                        <Input placeholder='BoD' onChange={(e)=>this.handleChangeli('bod',e)}/>
                        <Input placeholder='min % Recycle' onChange={(e)=>this.handleChangeli('minPercentageIndus',e)} />
                        <Button primary onClick={this.onSubmitli}>Submit</Button>

                    </Grid.Column>
                    <Grid.Column width='5'>
                    <Header size='large' textAlign='center'>Urban Local Bodies</Header>
                    <Label color='red' horizontal>
                    pH
                    <Input placeholder='pH' onChange={(e)=>this.handleChangeul('ph',e)} />
                    </Label>
                    <Input placeholder='solids' onChange={(e)=>this.handleChangeul('solids',e)} />
                    <Input placeholder='hardness' onChange={(e)=>this.handleChangeul('hardness',e)}/>
                    <Input placeholder='Oil' onChange={(e)=>this.handleChangeul('oil',e)} />
                    <Input placeholder='BoD' onChange={(e)=>this.handleChangeul('bod',e)}/>
                    <Input placeholder='min % Recycle' onChange={(e)=>this.handleChangeul('minPercentageLocal',e)} />
                    <Button primary onClick={this.onSubmitul}>Submit</Button>

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
