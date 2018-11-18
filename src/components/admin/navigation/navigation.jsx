import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {firebase} from '../../../firebase';

const Navigation = (props) => {

const links = [
    {
        name: 'Машины',
        linkTo: '/cars'
    }, 
    {
        name: 'Добавить Авто',
        linkTo: '/add_car'
    }, 

]

const style = {
    color: "#ffffff",
    fontWeight: "300",
    borderBottom: "1px solid #353535",
    fontSize: "20px"
}
    const navigationLinks=()=>(
        links.map((item, i)=>(
            <Link to={`/dashboard${item.linkTo}`} key={i}>
            <ListItem button style={style}>
                {item.name}
            </ListItem>
            
            </Link>
        ))
    )


    const logoutHandler=()=>{
        firebase.auth().signOut().then(()=>{
          
        }, error=>{
            console.log('error')
        })
    }
    return (    
        <List>
            {navigationLinks()}
            <ListItem button style={style} onClick={()=> logoutHandler()}>Выйти</ListItem>
        </List>
    );
};

export default Navigation;