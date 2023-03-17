import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import OsmMap from "./components/OsmMap";
import FormInput from "./components/FormInput";

import {
  UserOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  BarChartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import {
  ConfigProvider,
  Layout,
  theme,
  FloatButton,
  Card,
  Row,
  Col,
  Statistic,
  Button,
  Space,
  Switch,
  Drawer,
  Avatar,
  Tooltip,
  message,
  Typography,
} from "antd";
import { useState } from "react";
import {
  formVisibility,
  toggleMode,
} from "./Redux/Actions/actions";
const { defaultAlgorithm, darkAlgorithm } = theme;
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function App() {
  // const [formvisible, setFormvisible] = useState(false);
  const [showRegionCard, setShowRegionCard] = useState(false);
  // const [currency, setCurrency] = useState("");
  // const [currencySymbol, setCurrencySymbol] = useState("");

  const isDarkMode = useSelector((state) => state.reducer.DarkMode);
  const visibility = useSelector((state) => state.reducer.visible);
  const regionData = useSelector((state) => state.reducer.RegionData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  // const [messageApi, contextHolder] = message.useMessage();

  // if (regionData.name.common == "United States") {
  //   dispatch(setExtraDetails("$"));
  //   dispatch(setExtraDetails("mph"));
  //   dispatch(setExtraDetails("EST"));
  // }

  // if (regionData.name.common == "India") {
  //   dispatch(setExtraDetails("₹"));
  //   dispatch(setExtraDetails("m/s"));
  //   dispatch(setExtraDetails("IST"));
  // }
  // if (regionData.name.common == "United Kingdom") {
  //   dispatch(setExtraDetails("£"));
  //   dispatch(setExtraDetails("mph"));
  //   dispatch(setExtraDetails("GMT"));
  // }

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <div className="App">
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Drawer title="" placement="left" onClose={onClose} open={open}>
            <div id="menuToggle">
              <ul id="menu">
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Info</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
                <li>
                  <Space direction="vertical">
                    <Switch
                      checkedChildren="dark"
                      unCheckedChildren="light"
                      // checked={checkDark}
                      onChange={(checked) =>
                        checked
                          ? dispatch(toggleMode(true))
                          : dispatch(toggleMode(false))
                      }
                    />
                  </Space>
                </li>
              </ul>
            </div>
          </Drawer>

          <Layout className="site-layout">
            <Header
              style={{
                background:
                  "linear-gradient(109.6deg, rgb(5, 84, 94) 16%, rgb(187, 187, 187) 91.1%)",
                position: "relative",
              }}
            >
              <MenuOutlined onClick={showDrawer} style={{ color: "white" }} />
              {/* &nbsp;&nbsp;&nbsp; Transforming mapping into a practical
              decision-making tool */}
              <Tooltip title="Login">
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                    position: "absolute",
                    top: 15,
                    right: 20,
                    marginTop: "auto",
                    cursor: "pointer",
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                items={new Array(2).fill(null).map((_, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: `nav ${key}`,
                  };
                })}
              /> */}
            </Header>
            <Content
              style={{
                padding: "0",
                margin: "0 16px",
              }}
            >
              {visibility && <FormInput />}

              <div
                style={{
                  paddingTop: 4,
                  minHeight: 360,
                  // background: colorBgContainer,
                }}
              >
                <OsmMap />
              </div>
            </Content>
            {/* <FloatButton.Group
            trigger="click"
            type="default"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "150px",
              padding: "10px",
              zIndex: 4000,
            }}
            icon={<CustomerServiceOutlined />}
          >
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
          </FloatButton.Group> */}
            <FloatButton.Group
              trigger="hover"
              type="primary"
              style={{
                position: "fixed",
                bottom: "20px",
                right: "80px",
                padding: "10px",
                zIndex: 4000,
              }}
              icon={<GlobalOutlined />}
            >
              <FloatButton
                trigger="click"
                tooltip={<div>Select Region</div>}
                onClick={(e) => {
                  dispatch(formVisibility(true));
                }}
                icon={<EnvironmentOutlined />}
              />
              <FloatButton
                trigger="click"
                tooltip={<div>Region Info</div>}
                onClick={() => setShowRegionCard(true)}
                icon={<BarChartOutlined />}
              />
            </FloatButton.Group>
            {showRegionCard && (
              <Card
                title="Region Insights"
                bordered={false}
                style={{
                  opacity: 0.9,
                  position: "fixed",
                  top: "40%",
                  right: "20px",
                  width: 300,
                  zIndex: 4000,
                }}
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic title="Country" value={regionData.name.common} />
                  </Col>
                  <Col span={12}>
                    <Statistic title="Capital" value={regionData.capital} />
                  </Col>
                </Row>
                <Button
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginTop: 16,
                  }}
                  onClick={() => setShowRegionCard(false)}
                >
                  hide
                </Button>
              </Card>
            )}
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              Design ©2023 Created by Aadarsh
            </Footer>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  );
}

export default App;
