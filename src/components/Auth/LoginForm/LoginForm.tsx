import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProConfigProvider,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import { Tabs, theme } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/services/store/store';
import { loginAccount } from '@/services/features/authSlice';

type LoginType = 'account';

const LoginFormComponent = () => {
    const { token } = theme.useToken();
    const [loginType, setLoginType] = useState<LoginType>('account');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (values: { username: string; password: string }) => {
        setLoading(true);
        try {
            // Chuẩn bị dữ liệu đúng format API yêu cầu
            const loginData = {
                email: values.username,
                userpass: values.password
            };

            // Gọi API login
            await dispatch(loginAccount(loginData)).unwrap();



            // Điều hướng về trang chủ
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProConfigProvider hashed={false}>
            <div style={{ backgroundColor: token.colorBgContainer }}>
                <LoginForm
                    onFinish={handleSubmit}
                    submitter={{
                        searchConfig: {
                            submitText: 'Login',
                        },
                        submitButtonProps: {
                            loading, // Button login có trạng thái loading
                        }
                    }}
                >
                    <Tabs
                        centered
                        activeKey={loginType}
                        onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                    >
                        <Tabs.TabPane key={'account'} tab={'Login with account and password'} />
                    </Tabs>
                    {loginType === 'account' && (
                        <>
                            <ProFormText
                                name="username"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'Email address'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email!',
                                    }
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'Password'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            />
                        </>
                    )}
                    <div
                        style={{
                            marginBlockEnd: 24,
                        }}
                    >
                        <ProFormCheckbox noStyle name="autoLogin">
                            Auto login
                        </ProFormCheckbox>
                        <a
                            style={{
                                float: 'right',
                            }}
                        >
                            Forgot password
                        </a>
                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};

export default LoginFormComponent;
