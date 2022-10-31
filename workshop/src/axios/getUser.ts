import axios, {AxiosResponse} from 'axios';

type User = {
    id: number;
    email: string;
    first_name: string;
}
type UserResponse = {
    data: User[]
}

export async function  getUser(){
    try{
        let {data}  =  await axios.get<UserResponse>('https://reqres.in/api/users')
        console.log(data.data[0])
        console.log(data.data[0]!.email)
    }catch (e){

    }
}
