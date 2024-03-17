import * as React from "react";
import { Button, Form, TimePicker } from "antd";
import dayjs from "dayjs";

function App() {
  const [form] = Form.useForm();
  const initialValues = {
    timePicker: dayjs().subtract(1, "hour"),
  };
  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const format = "HH:mm";

  return (
    <Form form={form} initialValues={initialValues} onFinish={onFinish}>
      <Form.Item
        name="timePicker"
        label="Time Picker"
        rules={[{ required: true, message: "Please select time!" }]}
      >
        <TimePicker format={format} use12Hours={false} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button style={{ marginLeft: "8px" }} onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;
