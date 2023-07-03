import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
    
    if(error.type === "NotFoundError") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

}