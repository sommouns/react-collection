import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Button, Switch } from "antd";
require("../styles/head.scss");

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ContentComponent extends Component {
  state = {
    theme: "dark",
    current: "1"
  };

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <aside className="aside-wrap">
        <div style={{ width: 200 }}>
          <div>
            <Menu
              onClick={this.handleClick}
              style={{ width: 200 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["1"]}
              mode="inline"
            >
              <Menu.Item key="1">
                <Link to="/index" replace>
                  <Icon type="home" />首页
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/message" replace>
                  <Icon type="mail" />信息
                </Link>
              </Menu.Item>
              {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><Link to="/index">首页</Link></span>}>
                <MenuItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu> */}
            </Menu>
          </div>
        </div>
      </aside>
    );
  }
}
export default ContentComponent;