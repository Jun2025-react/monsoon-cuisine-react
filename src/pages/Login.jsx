import {useState} from 'react';
import LoginCard from '../components/Login/LoginCard';
import Card from 'react-bootstrap/Card';
import RegisterCard from '../components/Login/RegisterCard';

const Login = () => {

    const [ isLoginMode , setIsLoginMode ] = useState(true);
    const changeToRegister = () => {
        setIsLoginMode(false);
    }
    const changeToLogin = () => {
        setIsLoginMode(true);
    }

    return (
        <div className="d-flex align-items-center justify-content-center py-5" style={{ height:700}}>
            <Card className="p-4 shadow w-50" style={{ minWidth: '400px', maxWidth: '600px', borderRadius: '16px' }}>
                <Card.Body>
                    {isLoginMode ? <LoginCard handleMode={changeToRegister} /> : <RegisterCard handleMode={changeToLogin}/>}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
