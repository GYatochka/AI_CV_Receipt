import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default class Upload extends React.Component{
    render(){
        return(
            <Form>
                <Form.Group>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                        </span>
                    </div>
                    <div className="custom-file">
                        <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
                        </label>
                    </div>
                </div>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}