import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useConstructor } from "../../helpers/constructor";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
// partials
import CategoryForm from "./CategoryForm";
// actions
import { showCategory, editCategory, setCategoryDefaults, handleCategoryTitle } from "../../redux/actions/CategoryActions";

const EditCategory = (props) => {
  useConstructor(() => {
    let handleChange = (e) => {
      e.preventDefault();
      props.handleTitleChange(e.target.value);
    };
    handleChange = handleChange.bind(this); //eslint-disable-line

    let handleSubmit = (e) => {
      e.preventDefault();
      props.editCategory(props.categories.category.title, props.id, function () {
        // reset title
        props.handleTitleChange("");
        // redirect
        setTimeout(() => props.setEditModal(false), 2000);
      });
    };
    handleSubmit = handleSubmit.bind(this); //eslint-disable-line
  });

  let { id } = props;

  useEffect(() => {
    props.setCategoryDefaults();
    props.showCategory(props.id);
  }, []); //eslint-disable-line

  useEffect(() => {
    // componentWillUnmount
    return () => {
      props.handleTitleChange("");
    };
  }, [id]);

  let handleChange = (e) => {
    e.preventDefault();
    props.handleTitleChange(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    props.editCategory(props.categories.category.title, props.id, function () {
      // reset title
      props.handleTitleChange("");
      // redirect
      setTimeout(() => props.setEditModal(false), 2000);
    });
  };

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="row">
          <h3 className="box-title">Edit {props.catTitle}</h3>
          <div className="col-md-12">
            <div className="box box-warning">
              <div className="box-header with-border">{/* <h3 className="box-title">Edit category #{props.match.params.id}</h3> */}</div>
              <form method="post" className="flex flex-col space-y-4 justify-between" onSubmit={handleSubmit}>
                <div className="box-body">
                  <CategoryForm categories={props.categories} onchange={handleChange} />
                </div>
                <ModalFooter className="box-footer">
                  <Button type="submit" className="btn btn-success">
                    Update
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
    showCategory: (id) => dispatch(showCategory(id)),
    handleTitleChange: (title) => dispatch(handleCategoryTitle(title)),
    editCategory: (title, id, cb) => dispatch(editCategory(title, id, cb)),
    setCategoryDefaults: () => dispatch(setCategoryDefaults()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
