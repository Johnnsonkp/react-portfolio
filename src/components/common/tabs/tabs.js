import { Tabs } from "antd";
const { TabPane } = Tabs;

export const TabSlider = (props) => {
  return (
    <div style={{ marginBottom: props.marginBottom }}>
      <Tabs
        defaultActiveKey="1"
        centered
        type="card"
        size={"large"}
        tabBarGutter={"0"}
        tabBarStyle={{ width: "100%" }}
        border={false}
      >
        <TabPane tab={props.tab1Name} key="1">
          {props.tab1}
        </TabPane>
        <TabPane tab={props.tab2Name} key="2">
          {props.tab2}
        </TabPane>
        <TabPane tab={props.tab3Name} key="3">
          {props.tab3}
        </TabPane>
      </Tabs>
    </div>
  );
};
