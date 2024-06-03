import Joi from "joi";
export const regValidator = Joi.object({
    username: Joi.string().required().pattern( /^[a-zA-Z]\w{1,19}$/).max(20)
        .messages({
            'string.required.base': 'this field is required',
            'string.pattern.base': 'Username must start with a letter and can contain letters, numbers, and underscores',
            'string.max.base': 'max length is 20 characters',

        }),
    password: Joi.string().required().pattern( /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).max(128)
        .messages({
            'string.required.base': 'this field is required',
            'string.pattern.base': 'Password must contain at least one digit, one uppercase letter, one lowercase letter, one special character, and be between 8 to 20 characters long',
            'string.max.base': 'max length is 128 characters',
        })

}).options({ abortEarly: false });
