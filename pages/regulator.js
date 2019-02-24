import React from 'react'
import { Segment, Header, Grid, Input,Label, Button } from 'semantic-ui-react'
const App =require('../connection/app');
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
      console.log('here')
      var li= this.state.lichange;
      console.log(li.ph);
      App.defineWaterSpecsIndus(li.ph,li.sd,li.hd,li.ol,li.bd,li.mn)
    }
    onSubmitul = () => {
      var ul= this.state.ulchange;
      console.log(ul.ph);
      App.defineWaterSpecsLocal(ul.ph,ul.sd,ul.hd,ul.ol,ul.bd,ul.mn)
    }
    render(){
        return (
        <Segment.Group raised>
            <Header size='huge' textAlign='center'>Regulator Dashboard</Header>
            <Grid>
                <Grid.Row textAlign='center'>
                    <Grid.Column width='5'>
                        <Header size='large' textAlign='center'>Large Industries</Header>
                        <Grid >
                            <Grid.Row textAlign='center'>
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='pH' onChange={(e)=>this.handleChangeli('ph',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row textAlign='center'>
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Solids' onChange={(e)=>this.handleChangeli('sd',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row textAlign='center'>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Hardness' onChange={(e)=>this.handleChangeli('hd',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Oil' onChange={(e)=>this.handleChangeli('ol',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='BoD' onChange={(e)=>this.handleChangeli('bd',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Min % Recycle' onChange={(e)=>this.handleChangeli('mn',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                        </Grid>


                        <Button onClick={this.onSubmitli} inverted primary>Submit</Button>

                    </Grid.Column>
                    <Grid.Column width='5'>
                        <Header size='large' textAlign='center'>Large Industries</Header>
                        <Grid >
                            <Grid.Row textAlign='center'>
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='pH' onChange={(e)=>this.handleChangeul('ph',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row textAlign='center'>
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Solids' onChange={(e)=>this.handleChangeul('sd',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row textAlign='center'>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Hardness' onChange={(e)=>this.handleChangeul('hd',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Oil' onChange={(e)=>this.handleChangeul('ol',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='BoD' onChange={(e)=>this.handleChangeul('bd',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12}>
                                <Input fluid style={{margin:'10px'}} placeholder='Min % Recycle' onChange={(e)=>this.handleChangeul('mn',e)} />
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                        </Grid>


                        <Button onClick={this.onSubmitul} inverted primary>Submit</Button>

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
