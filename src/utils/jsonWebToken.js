import { config } from '../src/config/config.env.js';
import jwt from 'jsonwebtoken'

class Jwt {
    constructor(secretKey) {
        this.secretKey = secretKey
    }

    crearJWT(payload) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, this.secretKey, { expiresIn: '2h' }, (err, token) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(token)
                    console.log(config.secretKey)
                }
            })
        })
    }

    verificarJWT(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.secretKey, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                    console.log(config.secretKey);
                }
            });
        });
    }
}

const jsonWebToken = new Jwt(config.secretKey);
export { jsonWebToken }
