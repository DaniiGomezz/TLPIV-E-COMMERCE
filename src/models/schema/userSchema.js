import { body, validationResult } from 'express-validator';

export const userSchema = [
    body('username')
        .exists().withMessage('El usuario es obligatorio')
        .notEmpty().withMessage('El usuario no puede estar vacio')
        .isString().withMessage('El nombre de usuario debe de ser una cadena de carácteres')
        .isLength({ min: 6, max: 15 }).withMessage('El usuario debe contener entre 6 a 15 caracteres'),

    body('email')
        .exists().withMessage('El gmail es obligatorio')
        .notEmpty().withMessage('El gmail no puede estar vacio')
        .isEmail().withMessage('El gmail no es valido'),
        
    body('password')
        .exists().withMessage('La contraseña es obligatoria')
        .notEmpty().withMessage('La contraseña no puede estar vacia')
        .isLength(8).withMessage('La contraseña no debe ser menos a 8 caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];