import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { listCategories, setCategoryDefaults, deleteCategory } from "../../redux/actions/CategoryActions";
import Spinner from "../misc/Spinner";
import Button from "@material-tailwind/react/Button";
import { Link } from "react-router-dom"; //eslint-disable-line
import Pagination from "@material-tailwind/react/Pagination";
import Progress from "@material-tailwind/react/Progress";
import SuccessAlert from "@material-tailwind/react/ClosingAlert";
import tw from "twin.macro";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import LargeModal from "components/modal/LargeModal";
import Icon from "@material-tailwind/react/Icon";
import Image from "@material-tailwind/react/Image";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import styled from "styled-components";
import Team1 from "images/team-1-800x800.jpg";
import Team2 from "images/team-2-800x800.jpg";
import Team3 from "images/team-3-800x800.jpg";
import Team4 from "images/team-4-470x470.png";
import AddCategories from "./AddCategories";
import EditCategory from "./EditCategory";

const Container = tw.div`container mx-auto px-4 w-96 overflow-y-auto w-full h-96 max-h-full`;
const Section = tw.section``;
const Content = styled(Section)`
  ${tw`content`}
`;
const TopRow = tw.div`flex justify-between`;

function Categories(props) {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState();
  const [catTitle, setCatTitle] = useState("");

  useEffect(() => {
    props.setCategoryDefaults();
    props.listCategories(1);
    handleChange = handleChange.bind(this);
    handleSubmit = handleSubmit.bind(this);
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
      setTimeout(() => props.history.push("/categories"), 2000);
    });
  };

  let handleDelete = (e) => {
    e.preventDefault();
    if (id !== null) {
      props.deleteCategory(id);
    } else {

    }
  }

  const editRef = useRef();
  const deleteRef = useRef();

  return (
    <Container>
      <Content className="content w-96">
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <TopRow>
                <h3 className="text-2xl">Categories List</h3>

                <Button
                  color="purple"
                  buttonType="filled"
                  size="regular"
                  // rounded={false}
                  // block={false}
                  // iconOnly={false}
                  ripple="light"
                  onClick={(e) => setAddModal(true)}
                >
                  Add <i className="fa fa-plus"></i>
                </Button>
              </TopRow>

              <div className="overflow-x-auto">
                {props.categories.list_spinner ? (
                  <Spinner show={props.categories.list_spinner} />
                ) : (
                  <>
                    {props.categories.success_message !== "" && <SuccessAlert msg={props.categories.success_message} color="green" />}
                    {props.categories.error_message !== "" && <SuccessAlert msg={props.categories.error_message} color="red" />}

                    <table className="table-auto items-center w-full bg-transparent border-collapse min-w-[500rem]">
                      <thead>
                        <tr>
                          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            #
                          </th>
                          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Title
                          </th>
                          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Slug
                          </th>
                          <th
                            width="15%"
                            className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.categories.categories.data !== undefined ? (
                          props.categories.categories.data.map((item) => (
                            <tr key={item.id}>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-1 text-left">
                                {item.id}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-1 text-left">
                                {item.title}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-1 text-left">
                                {/* <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i> pending */}
                                {item.slug}
                              </th>
                              <th className="border-b border-gray-200 flex justify-between font-light text-sm whitespace-nowrap px-2 py-1 text-left">
                                {/* {item.id} */}
                                {/* <Progress color="red" value="60" /> */}
                                <Button
                                  color="lightBlue"
                                  buttonType="link"
                                  size="regular"
                                  rounded={true}
                                  block={false}
                                  iconOnly={true}
                                  ripple="dark"
                                  ref={editRef}
                                  onClick={() => {
                                    setEditModal(true);
                                    setId(item.id);
                                    setCatTitle(item.title);
                                  }}
                                >
                                  <Icon name="edit" size="xl" color="blue" />
                                </Button>
                                <Button
                                  color="lightBlue"
                                  buttonType="link"
                                  size="regular"
                                  rounded={true}
                                  block={false}
                                  iconOnly={true}
                                  ripple="dark"
                                  ref={deleteRef}
                                  onClick={() => {
                                    setDeleteModal(true);
                                    setId(item.id);
                                    setCatTitle(item.title);
                                  }}
                                >
                                  <Icon name="delete" size="xl" color="red" />
                                </Button>
                                <Tooltips placement="bottom" ref={editRef}>
                                  <TooltipsContent>Edit Category</TooltipsContent>
                                </Tooltips>
                                <Tooltips placement="right" ref={deleteRef}>
                                  <TooltipsContent>Delete category</TooltipsContent>
                                </Tooltips>
                              </th>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              Argon Design System
                            </th>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              $2,500 USD
                            </th>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i> pending
                            </th>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              <div className="flex">
                                <div className="w-10 h-10 rounded-full border-2 border-white">
                                  <Image src={Team1} rounded alt="..." />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                  <Image src={Team2} rounded alt="..." />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                  <Image src={Team3} rounded alt="..." />
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                  <Image src={Team4} rounded alt="..." />
                                </div>
                              </div>
                            </th>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                              <Progress color="red" value="60" />
                            </th>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </>
                )}
              </div>

              <Pagination data={props.categories.categories} onclick={props.listCategories.bind(this)} />
            </div>
          </div>
        </div>
      </Content>
      <LargeModal title="Add Category" setOpenModal={setAddModal} footer={false} active={addModal}>
        <AddCategories setAddModal={setAddModal} />
      </LargeModal>
      <LargeModal title="Edit Category" setOpenModal={setEditModal} footer={false} active={editModal}>
        <EditCategory setEditModal={setEditModal} id={id} catTitle={catTitle} />
      </LargeModal>
      <Modal title="Edit Category" active={deleteModal}>
        <ModalHeader toggler={() => setDeleteModal(false)}>
          Delete {catTitle}?
        </ModalHeader>
        <ModalBody>
          <p className="text-base leading-relaxed text-gray-600 font-normal">
            Are you sure you want to delete this category?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="green"
            buttonType="link"
            onClick={(e) => setDeleteModal(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button
            color="red"
            onClick={(e) => handleDelete()}
            ripple="light"
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listCategories: (page) => dispatch(listCategories(page)),
    setCategoryDefaults: () => dispatch(setCategoryDefaults()),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
