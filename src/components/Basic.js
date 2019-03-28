import React, { Component } from 'react';
import { ScrollView } from 'react-native';


import Header from './Header';
import Flist from './Flist';
import Slist from './Slist';
import Button from './Button';
import Flex from './Flex';
import Flex1 from './Flex1';
import Img from './Img';
import Blink from './Blink';
import Scomponent from './Scomponent';
import Cen from './Cen';
import In from './In';
import Greeting from './Greeting';
import FetchApi from './FetchApi';

class Basic extends Component {
    render () {
        return (
            <ScrollView >

                <Header headerText="Image" />   
                <Img />
                <Header headerText="Fetch Api Example" />   
                <FetchApi />
                <Header headerText="Blink text" />   
                <Blink />
                <Header headerText="Props 1" />   
                <Greeting />
                <Header headerText="Input Handling" />   
                <In />
                <Header headerText="Style Component" />
                <Scomponent />
                <Header headerText="Flat List" />
                <Flist />
                <Header headerText="Section List" />
                <Slist />
                <Header headerText="Buttons" />
                <Button />
                <Header headerText="Align Item Basics Flex Box" />
                <Flex />
                <Header headerText="Height and Width" />
                <Flex1 />
                <Header headerText="Justify Content" />
                <Cen />
                
            </ScrollView>
        );
    }
}


export default Basic;