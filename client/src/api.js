import axios from "axios";
const url = "/api/post";
const urlAPI = "http://universities.hipolabs.com/search?country=Viet+Nam";
export default class API{
    // static async getAllPost(){
    //     const res = await axios.get(url);
    //     return res.data;
    // }
    static async getAllPostQuantity(){
        const res = await axios.get(url);
        return res.data;
    }
    static async getAPIUniversity(){
        const res = await axios.get(urlAPI);
        return res.data;
    }
    static async getAllPostGroup(){
        const res = await axios.get(`${url}/${group}`);
        return res.data;
    }
    static async getPostById(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    static async addPost(post){
        const res = await axios.post(url,post);
        return res.data;
    }
    static async updatePost(id,post){
        const res = await axios.patch(`${url}/${id}`,post);
        return res.data;
    }
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
   
}