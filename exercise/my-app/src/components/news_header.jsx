import React from 'react';
import axios from 'axios'
import {
    Row,
    Col,
    Menu,
    Icon,
    Button,
    Modal,
    Tabs,
    Form,
    Input,
    message

} from 'antd'


import logo from '../images/logo.png'


const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class NewsHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key : 'top',
            username :null,
            userId : null,
            isShow : false

        }
    }

    changeKey = ({item, key}) =>{
        //在这判断用户是否点击的是登录注册按钮
        if(key === 'loginAndRegister'){
            this.setState({
                isShow :true
            });
            this.props.form.resetFields();//清空表单项的所有内容
        }
        this.setState({
         key:key
        })
    };

    //上来就看一下缓存中是否有数据
    componentWillMount(){
        let user = JSON.parse(localStorage.getItem('Person_key'));
        //判断里边呢是否有数据
        if(user){
            //更新状态
            this.setState({
                username : user.username,
                userId : user.userId
            })
        }
    }

    //定义form表单的提交和注册
    handleSubmit = (isRegister, event) =>{
        //表单的回调有默认行为要取消掉
        event.preventDefault();
        //发送请求
        let action = isRegister?'register':'login';
        //获取所有的表单数据
        let user = this.props.form.getFieldsValue();
        //console.log(user)
        //都获取完毕后开始拼接URL
        let url =  `http://newsapi.gugujiankong.com/Handler.ashx?action=${action}&username=${user.username}&password=${user.password}&r_userName=${user.r_username}&r_password=${user.l_password}&r_confirmPassword=${user.r_password}`

        //上面都是准备                                                                                                                                       工作完事后就要发送url请求了
        axios.get(url)
            .then(response =>{
                let data = response.data;
         //判断用户是登录还是注册
                if(isRegister){
               message.success('恭喜您注册成功');
                }else{
      //这里就是登录的代码
               if(!data){
                   message.error('账号或密码不正确')
               }else{
                       //更新状态
                       this.setState({
                           username : data.NickUserName,
                           userId : data.UserId
                       })
                           let {username, userId} = this.state
                           message.success('恭喜您登录成功');
                           localStorage.setItem('Person_key', JSON.stringify({username, userId}))
                     }
               }
            })
            .catch(error => {
                console.log(error)
            })
            //跟新弹框的状态
            this.setState({isShow : false})
    };
    //定义登录后退出的方法
    handleOut = () =>{
        //跟新状态
        this.setState({
            username :null,
            userId : null
        })
        localStorage.removeItem('Person_key');
    };


    //在弹窗框的退出方法
    handleShow = (isShow) =>{
        this.setState({
            isShow
        })


    };


    render(){
        let {key, username, userId, isShow} = this.state;
        let { getFieldDecorator } = this.props.form;

        let UserItem =username?(
                <MenuItem className="register" key="person">
                    <Button type="primary">{username}</Button>&nbsp;&nbsp;
                    <Button type="dashed">个人中心</Button>&nbsp;&nbsp;
                    <Button onClick={this.handleOut} type="Ghost">退出</Button>
                </MenuItem>
            )
            :(
                <MenuItem className="register" key="loginAndRegister">
                    <Icon type="appstore"/> 登录/注册
                </MenuItem>
            );
        return (
            <Row>
                <Col span={1}></Col>
                <Col span={3}>
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <span>ReactNews</span>
                    </div>
                </Col>
                <Col span={19}>
                    <Menu  onClick={this.changeKey} mode="horizontal" selectedKeys={[key]}>
                        <MenuItem key="top">
                            <Icon type="appstore"/> 头条
                        </MenuItem>
                        <MenuItem key="shehui">
                            <Icon type="appstore"/> 社会
                        </MenuItem>
                        <MenuItem key="guonei">
                            <Icon type="appstore"/>国内
                        </MenuItem>
                        <MenuItem key="guoji">
                            <Icon type="appstore"/>国际
                        </MenuItem>
                        <MenuItem key="yule">
                            <Icon type="appstore"/>娱乐
                        </MenuItem>
                        <MenuItem key="tiyu">
                            <Icon type="appstore"/>体育
                        </MenuItem>
                        <MenuItem key="keji">
                            <Icon type="appstore"/>科技
                        </MenuItem>
                        <MenuItem key="shishang">
                            <Icon type="appstore"/>时尚
                        </MenuItem>
                        {UserItem}
                    </Menu>
                    <Modal title='用户中心' visible={isShow} okText='关闭'
                      onOk={this.handleShow.bind(this, false)} onCancel={this.handleShow.bind(this, false)} >
                        <Tabs onChange={()=> this.props.form.resetFields()} >
                            <TabPane tab="登录" key="1">
                                <Form  onSubmit={this.handleSubmit.bind(this, false)}>
                                    <FormItem label='用户名:'>
                                        {
                                            getFieldDecorator('username')(
                                                <Input  type="text" placeholder="请输入用户名"/>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label='密码:'>
                                        {
                                            getFieldDecorator('password')(
                                                <Input  type="password" placeholder="请输入密码"/>
                                            )
                                        }
                                    </FormItem>
                                    <Button htmlType='submit' type="primary">登录</Button>
                                </Form>
                            </TabPane>
                            <TabPane tab="注册" key="2">
                                <Form  onSubmit={this.handleSubmit.bind(this, true)}>
                                    <FormItem label='用户名:'>
                                        {
                                            getFieldDecorator('r_username')(
                                                <Input  type="text" placeholder="请输入用户名"/>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label='密码:'>
                                        {
                                            getFieldDecorator('l_password')(
                                                <Input  type="password" placeholder="请输入密码"/>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label='确认密码:'>
                                        {
                                            getFieldDecorator('r_password')(
                                                <Input  type="password" placeholder="请输入密码"/>
                                            )
                                        }
                                    </FormItem>
                                    <Button htmlType='submit' type="primary">注册</Button>
                                </Form>


                            </TabPane>
                        </Tabs>

                    </Modal>

                </Col>
                <Col span={1}></Col>
            </Row>
        )
    }
}
export default Form.create()(NewsHeader);