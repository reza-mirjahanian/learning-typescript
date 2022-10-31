import {getUser} from "./axios/getUser";

const init = async () => {
   await getUser()
};
init().then(() => {});

