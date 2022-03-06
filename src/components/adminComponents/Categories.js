import React, { useEffect } from "react";
import { connect } from "react-redux";
import { listCategories, setCategoryDefaults } from "../../redux/actions/CategoryActions";
import Spinner from "../misc/Spinner";
import Button from "@material-tailwind/react/Button";
import { Link } from "react-router-dom";
import Pagination from "@material-tailwind/react/Pagination";
import Progress from "@material-tailwind/react/Progress";
import SuccessAlert from "@material-tailwind/react/ClosingAlert";
import tw from "twin.macro";
import Image from '@material-tailwind/react/Image';
import styled from "styled-components";
import Team1 from 'images/team-1-800x800.jpg';
import Team2 from 'images/team-2-800x800.jpg';
import Team3 from 'images/team-3-800x800.jpg';
import Team4 from 'images/team-4-470x470.png';


const Container = tw.div`container mx-auto px-4 w-full`;
const Section = tw.section``;
const Content = styled(Section)`
  ${tw`content`}
`;
const TopRow = tw.div`flex justify-between`;

function Categories(props) {
  useEffect(() => {
    props.setCategoryDefaults();
    props.listCategories(1);
  }, []); //eslint-disable-line

  return (
    <Container>
      <Content className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <TopRow>
                <h3 className="text-2xl">All categories</h3>

                <Button
                  color="purple"
                  buttonType="filled"
                  size="regular"
                  // rounded={false}
                  // block={false}
                  // iconOnly={false}
                  ripple="light"
                >
                  Add <i className="fa fa-plus"></i>
                </Button>
              </TopRow>

              <div className="overflow-x-auto">
                <Spinner show={props.categories.list_spinner} />

                <SuccessAlert msg={props.categories.success_message} />
                <SuccessAlert msg={props.categories.error_message} />

                <table className="items-center w-full bg-transparent border-collapse min-w-[500rem]">
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
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {item.id}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {item.title}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i> pending
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {item.slug}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            <Progress color="red" value="60" />
                          </th>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          Argon Design System
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">$2,500 USD</th>
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
              </div>

              <Pagination data={props.categories.categories} onclick={props.listCategories.bind(this)} />
            </div>
          </div>
        </div>
      </Content>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
