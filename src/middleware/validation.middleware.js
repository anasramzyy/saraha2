export const isValid = (schema) => {
  return (req,res, next) => {

    const copyReqObj = { ...req.body, ...req.params, ...req.query }

    //  joi schema

    const validationResult = schema.validate( copyReqObj, {abortEarly: false})

    if (validationResult.error) {
      // return res.json({success: false, error: validationResult.error.details })
      const errorArray = validationResult.error.details.map(
        (element) => element.message
      )  //  array  [{message: }, {message: }]
      return next(new Error(errorArray, {cause: 400}))
    }

    return next()
  }
}