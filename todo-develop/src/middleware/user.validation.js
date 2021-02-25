import Joi from "joi";
import {errorResponse} from '../helpers/response';
/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {method} next 
 */

const signUpValidation = (req, res, next) => {
	const schema = {
		name: Joi.string().regex(/^[a-zA-Z]+$/).max(100).required(),
		email:Joi.string().email().required(),
		password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,20}$/).required(),
	}

	const result = Joi.validate(req.body, schema);
	if (result.error !== null) {
		return errorResponse(res, 400, `${result.error.details[0].message}`);
	}
	next();
};

export default signUpValidation;
