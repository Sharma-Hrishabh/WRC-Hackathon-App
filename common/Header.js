import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from '../routes';

class Header extends Component{
    render(){
        return(
            <Menu secondary style={{marginTop: 10}}>
                <Link route="/">
                <Menu.Item
                    name='WRC'
                    header
                    style={{fontSize: 20, background: '#3fa53f', color: '#FFFFFF'}}
                />
                </Link>
                <Menu.Menu position='right'>
                    <Link route="/hospitals">
                    <Menu.Item
                        name='Admin'
                        style={{fontSize: 20, background: '#EC0000', color: '#FFFFFF' }}
                    />
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}
export default Header;
