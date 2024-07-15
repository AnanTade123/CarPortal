/* eslint-disable no-unused-vars */

import React, { useState } from "react";

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  MenuList,
  Collapse,
  MenuHandler,
  ListItem,
  Menu,
} from "@material-tailwind/react";

import { Link, useLocation } from "react-router-dom";

import Cookies from "js-cookie";

import Profile from "../Profile/Profile";

import { jwtDecode } from "jwt-decode";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NotificationDialog } from "./NotificationDialog";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  const token = Cookies.get("token");

  let jwtDecodes;

  if (token) {
    jwtDecodes = jwtDecode(token);
  }

  console.log(jwtDecodes);

  const userRole = token ? jwtDecodes?.authorities[0] : null;

  console.log(userRole);

  // eslint-disable-next-line no-unused-vars

  const DealerId = token ? jwtDecodes?.dealerId : null;

  const UserId = token ? jwtDecodes?.userId : null;

  const location = useLocation();
 
  const handleMenuItemClick = () => {
    setOpenNav(false)
  };

  const active = location.pathname === `/dealer/${jwtDecodes?.dealerId}`;
  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navListMenuItems = [
      {
        title: "Bidding Car",
        link:
          userRole === "DEALER"
            ? "/dealer/biddingcar"
            : userRole === "ADMIN"
            ? "/admin/biddingcar"
            : userRole === "SALESPERSON"
            ? "/sales/biddingcar"
            : null,
      },
    ];
    if (userRole === "ADMIN") {
      navListMenuItems.unshift(
        {
          title: "Dashboard",

          link: `/`,
        },
        {
          title: "Car Models",
          link: "/carlistmodel",
        }
      );
    }

    if (userRole === "DEALER") {
      navListMenuItems.unshift({
        title: "Cars",
        link: `/dealer/${jwtDecodes?.dealerId}`,
        
      },
      {
        title: "Winner Section",
        link: `/dealer/winnersection`,
        
      },
      
    );
    }
    const renderItems = navListMenuItems.map(({ title, link }, key) => (
      <Link to={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-normal"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ));

    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className={`flex items-center gap-2 p-3 font-medium text-gray-900`}
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Dashboard
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
    );
  }

  const adminDashboard = userRole?.includes("ADMIN") ? (
    <>
      {/* <Link to={"/bidding"}>

        <Typography

          as="li"

          variant="small"

          color="blue-gray"

          className={`p-3 rounded-md font-normal ${window.location.pathname === "/bidding" ? "bg-indigo-200 text-white" : ""}`}

        >

          Live

        </Typography>

      </Link> */}

      <Link to={"/admin"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === "/admin"
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Dealers
        </Typography>
      </Link>
      <NavListMenu />

      <Link to={"/inspector"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === "/inspector"
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Inspectors
        </Typography>
      </Link>
      <Link to={"/admin/salesuser"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === "/admin/salesuser"
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Seller
        </Typography>
      </Link>

      <NotificationDialog />
    </>
  ) : null;

  const inspectorDashboard = userRole?.includes("INSPECTOR") ? (
    <>
      <Link to={`/inspector/car`}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === `/inspector/car`
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Cars
        </Typography>
      </Link>

      <NotificationDialog />
    </>
  ) : null;

  const salePersonDashboard = userRole?.includes("SALESPERSON") ? (
    <>
      <NavListMenu />

      <NotificationDialog />
    </>
  ) : null;

  const dealerDashboard = userRole?.includes("DEALER") ? (
    <>
      <Link to={"/carlist"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === "/carlist"
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Buy Car
        </Typography>
      </Link>

      <Link to={"/dealer/live/cars"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === "/dealer/live/cars"
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Live Cars
        </Typography>
      </Link>

      <NavListMenu />

      <Link to={`/dealer/${jwtDecodes?.dealerId}/allpending`}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname ===
            `/dealer/${jwtDecodes?.dealerId}/allpending`
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Pendig Request
        </Typography>
      </Link>

      <Link to={`/dealer/${jwtDecodes?.dealerId}/booking/confirm`} >
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname ===
            `/dealer/${jwtDecodes?.dealerId}/booking/confirm`
              ? "bg-indigo-200 text-white"
              : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Confirm Booking
        </Typography>
      </Link>

      <NotificationDialog />
    </>
  ) : null;

  const userDashboard = userRole?.includes("USER") ? (
    <>
      <Link to={`/pendinrequest/${jwtDecodes?.userId}`}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === "/pendinrequest"
              ? "bg-indigo-200 text-white"
              : ""
          }`}
        >
          All Request
        </Typography>
      </Link>

      {/* <Link to={`/user/booking/${jwtDecodes?.userId}`}>

        <Typography

          as="li"

          variant="small"

          color="blue-gray"

          className={`p-3 rounded-md font-normal ${window.location.pathname === `/user/booking/${jwtDecodes?.userId}` ? "bg-indigo-200 text-white" : ""}`}

        >

          Confirm Booking

        </Typography>

      </Link> */}

<Link to={`/user/${jwtDecodes?.userId}/favorite`}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname ===
            `/dealer/${jwtDecodes?.userId}/booking/confirm`
              ? "bg-indigo-200 text-white"
              : ""
          }`}
        >
          Favorite
        </Typography>
      </Link>

      <NotificationDialog />
    </>
  ) : null;

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 p-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-3 rounded-md font-normal ${
            window.location.pathname === "/" ? "bg-indigo-200 text-white" : ""
          }`}
          onClick={handleMenuItemClick}
        >
          Home
        </Typography>
      </Link>

      {userRole == "DEALER" ||
      userRole == "INSPECTOR" ||
      userRole == "SALESPERSON" ? null : (
        <Link to={"/carlist"}>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className={`p-3 rounded-md font-normal ${
              window.location.pathname === "/carlist"
                ? "bg-indigo-200 text-white"
                : ""
            }`}
            onClick={handleMenuItemClick}
          >
            Buy Car
          </Typography>
        </Link>
      )}
      {adminDashboard}
      {dealerDashboard}
      {userDashboard}
      {inspectorDashboard}
      {salePersonDashboard}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <Typography className="mr-4 cursor-pointer py-1.5 font-bold text-2xl">
            Cartechindia
          </Typography>
        </Link>

        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <div className="flex items-center gap-x-1">
            {token ? (
              <Profile
                userId={UserId}
                dealer_id={DealerId}
                userrole={userRole}
              />
            ) : (
              <>
                <Link to="/signin">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign In</span>
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </>
            )}
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={openNav}>
        {navList}
        {token ? null : (
        <div className="flex items-center gap-x-1">
          <Link to="/signin">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Sing In</span>
            </Button>
          </Link>

          <Link to="/signup">
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign up</span>
            </Button>
          </Link>
        </div> )}
      </Collapse>
    </Navbar>
  );
}
