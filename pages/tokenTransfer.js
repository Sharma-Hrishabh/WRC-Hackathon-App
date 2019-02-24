import React from 'react'
import App from '../connection/app';
import { Segment, Header, Grid, Button,Input, Divider } from 'semantic-ui-react'

class SegmentExampleRaisedSegments extends React.Component{

    state={
        sale:{},
        industry:{},
        tokenBnc:0,
        tokenBncSale:0
      }

      componentDidMount(){
        let getVal=async ()=>{
          let val=await App.tokensInSale();
          val=val?val.toNumber():this.state.tokenBncSale;
          this.setState({tokenBncSale:val})
          let value=await App.tokensTotal();
          value=value?value.toNumber():this.state.tokenBnc;
          this.setState({tokenBnc:value})
        }
        getVal();
        // var tokenInSale = App.tokensInSale().then(val=>val).then(val=>val.toString());
        // console.log(tokenInSale,'asd');
        // this.setState({tokenBncSale:tokenInSale});
        let getTotalVal=async ()=>{
          let value=await App.tokensTotal();
          this.setState({tokenBnc:value.toNumber()})
        }
        getTotalVal();
      }

    handleChangesale=(field,e)=>{
        let sale={...this.state.sale};
        sale[field]=e.target.value;
        this.setState({sale});
    }
    handleChangeindustry=(field,e)=>{
        let industry={...this.state.industry};
        industry[field]=e.target.value;
        this.setState({industry});
    }
    onSubmitToSale = () => {
      var sale = this.state.sale;
      // console.log(sale.number);
      App.transferToSale(sale.address,sale.number)
    }

    onSubmitToIndustry = () => {
      var industry = this.state.industry;
      console.log(industry.address);
      App.transferToIndustry(industry.address,industry.number)

    }
    onSubmitDestroy = () => {
      var amount = this.state.tokenBncSale;

      App.burnTokens(amount);
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
                                    <Header textAlign='center' size='small'>Net Token Balance : {this.state.tokenBnc} Eth</Header>
                                    <Input style={{margin:'10px'}} fluid placeholder='Sale contract Address' onChange={(e)=>this.handleChangesale('address',e)} />
                                    <Input style={{margin:'10px'}} fluid placeholder='Number of Tokens' onChange={(e)=>this.handleChangesale('number',e)} />
                                    <Button style={{margin:'10px'}} onClick={this.onSubmitToSale} secondary inverted>Make Transaction</Button>
                                </Grid.Column>
                                <Grid.Column width={2}></Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider></Divider>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={2}></Grid.Column>
                                <Grid.Column width={12} textAlign='center'>
                                    <Header textAlign='center' size='large'>Transfer token to industry</Header>
                                    <Header textAlign='center' size='small'>Net Token Balance in sale : {this.state.tokenBncSale} Eth</Header>
                                    <Input style={{margin:'10px'}} fluid placeholder='Industry contract Address' onChange={(e)=>this.handleChangeindustry('address',e)} />
                                    <Input style={{margin:'10px'}} fluid placeholder='Number of Tokens' onChange={(e)=>this.handleChangeindustry('number',e)} />
                                    <Button style={{margin:'10px'}} onClick={this.onSubmitToIndustry} secondary inverted>Make Transaction</Button>
                                    <Button style={{margin:'10px'}} onClick={this.onSubmitDestroy} secondary inverted>Destroy Remaining</Button>
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
