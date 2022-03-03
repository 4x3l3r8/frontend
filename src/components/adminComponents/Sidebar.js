import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import tw, { css } from "twin.macro"; //eslint-disable-line
import H6 from '@material-tailwind/react/Heading6';

const SideBarContainer = tw.div`h-screen fixed bottom-0 top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`;
const SideBarFlex = tw.div`flex-col items-stretch min-h-full flex-nowrap px-0 relative`
const SidebarHeadText = tw.a`mt-2 text-center w-full inline-block`
const NavBody = tw.div`flex flex-col`
const HL = tw.hr`my-4 min-w-full`
const List = tw.ul`flex-col min-w-full flex list-none`
const ListItems = tw.li`rounded-lg mb-4`
const ListLink = tw(NavLink)`` //eslint-disable-line

const ButtonLinkGroup = tw.ul`flex-col min-w-full flex list-none absolute bottom-0 inset-x-0` 

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(tw`-left-64`);
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <SideBarContainer className={showSidebar}>
                {/* <div className={`h-screen fixed bottom-0 top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}> */}
                <SideBarFlex>
                    <SidebarHeadText
                        href="https://material-tailwind.com?ref=mtd"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <H6 color="gray">Material Tailwind</H6>
                    </SidebarHeadText>
                    <NavBody>
                        <HL />

                        <List>
                            <ListItems>
                                <NavLink
                                    to="/admin/admin/dashboard"
                                    className={(navData) => navData.isActive ? "bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md" : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"}
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    Dashboard
                                </NavLink>
                            </ListItems>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/admin/admin/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeclassname="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="settings" size="2xl" />
                                    Settings
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/admin/admin/tables"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeclassname="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="toc" size="2xl" />
                                    Tables
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/admin/admin/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeclassname="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Maps
                                </NavLink>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/admin/admin/requests"
                                    className={(navData) => navData.isActive ? 'bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md' : 'flex items-center gap-4 text-sm font-light py-3'}
                                >
                                    <Icon name="request_page" size="2xl" />
                                    Requests
                                </NavLink>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/admin/admin/posts"
                                    className={(navData) => navData.isActive ? 'bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md' : 'flex items-center gap-4 text-sm font-light py-3'}
                                >
                                    <Icon name="list_alt" size="2xl" />
                                    Posts
                                </NavLink>
                            </li>
                            {/*<li className="px-4 rounded-lg mb-2 text-gray-700">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="web" size="2xl" />
                                    Landing Page
                                </a>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <a
                                    href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="account_circle" size="2xl" />
                                    Profile Page
                                </a>
                            </li> */}
                        </List>

                        <ButtonLinkGroup className="flex-col min-w-full flex list-none absolute bottom-0 inset-x-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                                <a
                                    href="https://material-tailwind.com/documentation/quick-start"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="description" size="2xl" />
                                    Documentation
                                </a>
                            </li>
                            <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                                <a
                                    href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                >
                                    Free Download
                                </a>
                            </li>
                        </ButtonLinkGroup>
                    </NavBody>
                </SideBarFlex>
            </SideBarContainer>
        </>
    );
}
