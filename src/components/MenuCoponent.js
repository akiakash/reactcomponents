import React,{Component} from "react";
import {Media} from 'reactstrap';

class Menu extends Component{

    constructor(props) {
        super(props);

        this.state ={
            dishes: [
                {
                    id: 0,
                    name: 'uthappizza',
                     image:'assets/images/uthappizza.png',
                     category:'mains',
                     label:'hot',
                     price:'4.99',
                     description:'indian uthapam'
                },
                {
                    id: 1,
                    name: 'uthappizza',
                     image:'assets/images/buffet.png',
                     category:'mains',
                     label:'hot',
                     price:'4.99',
                     description:'indian uthapam'
                },
                {
                    id: 2,
                    name: 'uthappizza',
                     image:'assets/images/vadonut.png',
                     category:'mains',
                     label:'hot',
                     price:'4.99',
                     description:'indian uthapam'
                },
                {
                    id: 3,
                    name: 'uthappizza',
                     image:'assets/images/alberto.png',
                     category:'mains',
                     label:'hot',
                     price:'4.99',
                     description:'indian uthapam'
                },

            ]
        }
    }

    render(){

        const menu;

        return (
            <div  className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;