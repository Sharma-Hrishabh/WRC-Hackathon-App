import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Home from '../pages/home'
import Regulator from '../pages/regulator'
import Device from '../pages/device'
import Iot from '../pages/iot'
import Token from '../pages/tokenTransfer'
import { fail } from 'assert';
const App =require('../connection/app');



export default class SidebarExampleSidebar extends Component {
  state = {wrc:40, visible: false,indexVisible:true,iotVisible:false,deviceVisible:false,regulatorVisible:false ,tokenTransfer:false  }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })
  handleItemClick = (e, { name }) => this.setState((state)=>{
      return {activeItem: name,visible:!state.visible}
  })
  changeWrc=(val)=>{
    this.setState({wrc:val});
  }
  componentDidMount(){
    App.tokenPrice();
    // console.log('header'+price)
    // console.log(price);
    // var result;
    //   setTimeout(function(){     var str=document.cookie;
    //   result = str.split(';')[1].split(':')[1];
    //  }, 3000);
     // this.changeWrc(result)

    // console.log('ascsa'+document.cookie);
  }
  render() {
    const { visible } = this.state
    const { activeItem } = this.state
    return (
      <div>
        <Menu style={{color:'violet'}}>
        <Menu.Item
          name='list'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          <Icon name='list'/>
        </Menu.Item>

        <Menu.Item name='app'>
         <Header as='h1'>Noncence App</Header>
        </Menu.Item>

        <Menu.Item position='right'
          name='upcomingEvents'
        >
        <Header as='h3' size='medium'>WRC Rate -: 1 WRC = {this.state.wrc} Eth</Header>

        </Menu.Item>
      </Menu>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a' onClick={()=>{this.setState({visible:false,indexVisible:true,iotVisible:false,deviceVisible:false,regulatorVisible:false,tokenTransfer:false })}}>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>{this.setState({visible:false,indexVisible:false,iotVisible:true,deviceVisible:false,regulatorVisible:false,tokenTransfer:false })}}>
              <Icon name='microchip' />
              IOT Anamoly
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>{this.setState({visible:false,indexVisible:false,iotVisible:false,deviceVisible:true,regulatorVisible:false,tokenTransfer:false })}}>
              <Icon name='shield alternate' />
              Device Authentication
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>{this.setState({visible:false,indexVisible:false,iotVisible:false,deviceVisible:false,regulatorVisible:true,tokenTransfer:false })}}>
              <Icon name='user secret' />
              Regulator
            </Menu.Item>
            <Menu.Item as='a' onClick={()=>{this.setState({visible:false,indexVisible:false,iotVisible:false,deviceVisible:false,regulatorVisible:false,tokenTransfer:true })}}>
              <Icon name='indent' />
              Token Transfer
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher style={{height:'100vh'}}>
            <Segment basic>
              {this.state.indexVisible && <Home/>}
              {this.state.iotVisible && <Iot/>}
              {this.state.deviceVisible && <Device/>}
              {this.state.regulatorVisible && <Regulator wrc={(val)=>this.changeWrc(val)}/>}
              {this.state.tokenTransfer && <Token/>}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
