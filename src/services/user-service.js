import { default as http } from 'request-promise';

 class LoginService {
    register(request){
        const options = {
            method: 'POST',
            uri: 'http://localhost:9998/api/user/register',
            body: {
                username: request.username,
                email: request.email,
                password: request.password
            },
            headers: {
                'User-Agent': 'Request-Promise',
                'Content-Type': 'application/json'
            },
            json: true
        };
        return http(options);
    }

    login(request){
        const options = {
            method: 'POST',
            uri: 'http://localhost:9998/api/user/login',
            body: {
                username: request.username,
                password: request.password
            },
            headers: {
                'User-Agent': 'Request-Promise',
                'Content-Type': 'application/json'
            },
            json: true
        };
        return http(options);
    }

    logout(){
        const options = {
            method: 'GET',
            uri: 'http://localhost:9998/api/user/logout',
            headers: {
                'User-Agent': 'Request-Promise',
                'Content-Type': 'application/json'
            }
        };

        return http(options);
    }
}

const loginService = new LoginService();
export default loginService;