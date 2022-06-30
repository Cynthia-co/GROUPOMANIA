import axios from 'axios';

export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

export const uploadPicture = (data, id) => {
    return(dispatch) => {
        return axios
        .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data
        .then((res) => {
            return axios
            .get('${process.env.REACT_APP_API_URL}api/user/upload`')
            .then((res) => {
                dispatch({type: UPLOAD_PICTURE, payload:res.data.picture})
            });
        }))
        .catch(err => console.log(erreur));
    }
}