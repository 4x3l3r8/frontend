import React from 'react';
import Spinner from 'components/misc/Spinner';
import Alert from '@material-tailwind/react/ClosingAlert';
import Input from '@material-tailwind/react/Input';



const Categoryform = (props) => {
    return (
        props.categories ?
            <div>
                <Spinner show={props.categories.create_update_spinner} />
                {props.categories.error_message !== "" && <Alert msg={props.categories.error_message} color="red" >{props.categories.error_message}</Alert>}
                {props.categories.success_message !== "" && <Alert msg={props.categories.success_message} color="green" >{props.categories.success_message}</Alert>}

                <div>
                    <div className={`form-group ${props.categories.validation_errors != null ? 'has-error' : ''}`}>
                        {/* <label>Category title</label> */}
                        <Input type="text" color="lightBlue" outline={true} placeholder="Category title" onChange={props.onchange} value={props.categories.category.title ? props.categories.category.title : ''} name="title" />
                        {
                            props.categories.validation_errors != null ? (<div className="border-solid border-2 border-red-500 text-red-600">{props.categories.validation_errors.title[0]}</div>) : null
                        }
                    </div>
                </div>
            </div>
            : <div>Failed to load</div>);
}

export default Categoryform;
