import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useConstructor } from "../../helpers/constructor";
import CategoryForm from "./CategoryForm";
import Button from "@material-tailwind/react/Button";
import ModalFooter from "@material-tailwind/react/ModalFooter";
//actions
import { addCategory, setCategoryDefaults, handleCategoryTitle } from "../../redux/actions/CategoryActions";

const AddCategories = (props) => {
  useConstructor(() => {
    let handleChange = (e) => {
      e.preventDefault();
      props.handleTitleChange(e.target.value);
    };
    handleChange = handleChange.bind(this); //eslint-disable-line
    let handleSubmit = (e) => {
      e.preventDefault();
      props.addCategory(props.categories.category.title, function () {
        // reset title
        props.handleTitleChange("");
        // redirect
        setTimeout(() => props.setAddModal(false), 2000);
      });
    };
    handleSubmit = handleSubmit.bind(this); //eslint-disable-line
  });

  useEffect(() => {
    props.setCategoryDefaults();
    handleChange = handleChange.bind(this);  //eslint-disable-line
    handleSubmit = handleSubmit.bind(this);  //eslint-disable-line
  }, []); //eslint-disable-line

  let handleChange = (e) => {
    e.preventDefault();
    props.handleTitleChange(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    props.addCategory(props.categories.category.title, function () {
      // reset title
      props.handleTitleChange("");
      // redirect
      setTimeout(() => props.setAddModal(false), 2000);
    });
  };

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="box box-warning">
              <form method="post" className="flex flex-col space-y-4 justify-between" onSubmit={handleSubmit}>
                <div className="box-body">
                  <CategoryForm categories={props.categories} onchange={handleChange} />
                </div>
                <ModalFooter className="box-footer">
                  <Button type="submit" color="green" ripple="light" className="place-self-end">
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTitleChange: (title) => dispatch(handleCategoryTitle(title)),
    addCategory: (title, cb) => dispatch(addCategory(title, cb)),
    setCategoryDefaults: () => dispatch(setCategoryDefaults()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategories);
