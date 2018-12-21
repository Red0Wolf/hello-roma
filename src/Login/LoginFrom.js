import React, {Component} from 'react';
import {Form, Icon, Input, Button, Modal} from 'antd';
import 'antd/dist/antd.css';
import NormalRestorePassword from "./RestorePassword";


const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    state = {
        ModalText: '',
        visible: false,
        footer: null,
        formVisible: true,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    closeModal = () => {
        this.setState({
            visible: false,
        });
    };
    handleOk = (values) => {
        this.setState({
            ModalText:
                <div>
                    <h1>Done.</h1>
                    <p>The confirmation letter with recovery link was sent to {values.userEmail}.</p>
                    <p>Go and check your inbox.</p>
                </div>,
            formVisible: false,
            footer: <Button type="primary" onClick={this.closeModal}>Ok</Button>
        });
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    render() {
        const {visible, ModalText, footer, formVisible} = this.state;
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="submit_button login-form-button">
                            Enter
                        </Button>

                        <a href="#" onClick={this.showModal} className="login-form-forgot">Recover password?</a>

                    </FormItem>
                </Form>
                <Modal
                    title="Password recovering"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={footer}
                >
                    {ModalText}
                    {formVisible === true &&
                    <NormalRestorePassword onSubmit={this.handleOk}/>
                    }
                </Modal>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;