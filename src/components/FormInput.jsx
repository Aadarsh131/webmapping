import React from "react";
import { Button, Modal, Input, Radio, Space } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountryData,
  formVisibility,
  setLatLng,
} from "../Redux/Actions/actions";

function FormInput() {
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [region, setRegion] = useState("");
  const visibility = useSelector((state) => state.reducer.visible);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(formVisibility(false));
      dispatch(fetchCountryData(region));
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    dispatch(formVisibility(false));
  };
  return (
    <>
      <div>
        <Modal
          title="Please select the region"
          open={visibility}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          style={{
            height: "50",
            width: "50",
          }}
        >
          <div>
            <Radio.Group defaultValue="India" buttonStyle="solid">
              <Radio.Button
                value="United States"
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              >
                United States
              </Radio.Button>
              <Radio.Button
                value="India"
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              >
                India
              </Radio.Button>
              <Radio.Button
                value="United Kingdom"
                onChange={(e) => {
                  setRegion(e.target.value);
                }}
              >
                United Kingdom
              </Radio.Button>
            </Radio.Group>
          </div>
          <p>{modalText}</p>
        </Modal>
      </div>
    </>
  );
}

export default FormInput;
