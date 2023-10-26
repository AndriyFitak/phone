import Contacts from "./Components/Contacts/Contacts"
import FormCreate from "./Components/FormCreate/FormCreate"

const App = (props) => { 
    return ( 
        <>
            <FormCreate
                reRender = {props.reRender}
                contactsStore={props.contactsStore}
            />
            <Contacts
                list={props.contactsStore}
                reRender = {props.reRender}
            />
        </>
    )
}

export default App 