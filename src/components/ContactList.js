import React from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';



const ContactList = (props) => {
    console.log(props)
    if(!props.contacts){
        return <div>Loading...</div>
    }else {
        let listOfContacts = props.contacts ? props.contacts.map(contact => <Contact key={contact.id} contact={contact}/>) : <div>Loading...</div>

        return (
            <Table>
            <thead>
              <tr>
                <th>Name and Avatar</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Company</th>
                <th>Address</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {listOfContacts}
            </tbody>
          </Table>
        )
    }
   
    

}



const mapStateToProps = state => ({
    contacts: state.contacts
  })

//   const mapDispatchToProps = dispatch => bindActionCreators({
//     contacts: fetchContacts
//   }, dispatch)

  export default connect(mapStateToProps)(ContactList)