import { Button, Form, Input, Table } from "antd";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddData } from "./redux/action/addData";
import { DeleteData } from "./redux/action/deleteData";
import { useState } from "react";

const App = () => {
  const [edit, setEdit] = useState();
  let key = new Date().getTime();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => ({
    data: store.data.data,
  }));
  const onFinish = (values) => {
    console.log("🚀 ~ file: App.jsx:17 ~ onFinish ~ values", values.id);
    if (edit?.id) {
      console.log("🚀 ~ file: App.jsx:19 ~ onFinish ~ values", edit.id);
      const editedData = data.map((d)=>{
        if(edit.id === d.id){
          
        }
      })
    } else {
      values.id = key;
      dispatch(AddData(values));
      form.resetFields();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const deleteFunction = (key) => {
    console.log("🚀 ~ file: App.jsx:22 ~ deleteFunction ~ key", key);
    var deletedData = data.filter((d) => d.id != key.id);
    dispatch(DeleteData(deletedData));
  };

  const handleEdit = (values) => {
    form.setFieldsValue(values);
    console.log(values);
  };

  const columns = [
    {
      title: "Firstame",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (d) => (
        <Button
          onClick={() => {
            setEdit(d);
            handleEdit(d);
            console.log("🚀 ~ file: App.jsx:58 ~ App ~ setEdit", edit);
          }}
        >
          Edit
        </Button>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (data) => (
        <Button
          onClick={() => {
            deleteFunction(data);
          }}
        >
          Delete
        </Button>
      ),
    },
  ];
  return (
    <div className="box">
      <div className="form">
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please input your gender",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="table">
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
};
export default App;
