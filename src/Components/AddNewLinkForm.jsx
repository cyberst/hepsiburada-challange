import React, { useCallback } from "react";
import "./AddNewLinkForm.css";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddLink } from "../Reducers/LinksSlice";
import { setToastStateAsync } from "../Reducers/ToastSlice";

function AddNewLinkForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { linkName, linkURL } = e.target;
      dispatch(AddLink({ linkName: linkName.value, linkURL: linkURL.value }));
      history.push("/");
      dispatch(
        setToastStateAsync({
          linkName: linkName.value,
          removedOrAdded: false,
          duration: 1500,
        })
      );
      e.target.reset();
    },
    [dispatch, history]
  );
  return (
    <div>
      <Link to="/" className="Link">
        <i className="material-icons BackIcon">keyboard_backspace</i>
        Return To List
      </Link>
      <h3 className="">Add New Link</h3>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="linkName">Link Name:</Label>
          <Input id="linkName" placeholder="e.g. Alphabet" />
        </FormGroup>
        <FormGroup>
          <Label for="linkURL">Link URL:</Label>
          <Input id="linkURL" placeholder="e.g. http://abc.xyz" />
        </FormGroup>
        <button type="submit" className="AddButton">
          ADD
        </button>
      </Form>
    </div>
  );
}

export default AddNewLinkForm;
