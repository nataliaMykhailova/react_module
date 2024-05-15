import Joi from "joi";

export const postValidator = Joi.object({
    userId: Joi.number().integer().required().min(1).max(10)
        .messages({
            'number.base':'this field is required and must be e number',
            'number.integer':'only integers allowed',
            'number.min': 'min number is 1',
            'number.max': 'max number is 10'
        }),
    title: Joi.string().required().pattern( /^[a-zA-Z\s,.!?]+$/).max(150)
        .messages({
            'string.required.base': 'this field is required',
            'string.pattern.base': 'only English letters allowed',
            'string.max.base': 'max length is 150 characters',

        }),
    body: Joi.string().required().pattern( /^[a-zA-Z\s,.!?]+$/).max(2500)
        .messages({
            'string.required.base': 'this field is required',
            'string.pattern.base': 'only English letters allowed',
            'string.max.base': 'max length is 2500 characters',
        })

}).options({ abortEarly: false });