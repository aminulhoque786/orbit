import Container from "../components/Container"
import { LockOutlined, UserOutlined,InboxOutlined } from '@ant-design/icons';
import { Button,Form, Input } from 'antd';
import { useState } from "react";

const Registration = () => {

    let [fullName, setFullName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [nameerr, setNameErr] = useState('')

    let handleFullname = (e)=>{
        setFullName(e.target.value);
    }

    let handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    let handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    let handleSubmit = () =>{
        if(!fullName){
            setNameErr("fullname is missing");
        }else if(!email){
            console.log("Email is missing");
        }else if(!password){
            console.log("password is missing");
        }
    }

  
  return (
    <Container>
       <div className="w-[30%] mx-auto my-10">
        <h2 className="text-center mb-3">Sign up</h2>
       <Form>
      <Form.Item
        name="username"
      >
        <Input prefix={<UserOutlined />} onChange={handleFullname} placeholder="Username" />
       <p className="text-red-500"> {nameerr}</p>
      </Form.Item>
      <Form.Item
        name="Email"
      >
        <Input prefix={<InboxOutlined />} onChange={handleEmail} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
      >
        <Input prefix={<LockOutlined />} type="password" onChange={handlePassword} placeholder="Password" />
      </Form.Item>
    

      <Form.Item>
        <Button onClick={handleSubmit} block type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
       </div>
    </Container>
  )
}
export default Registration