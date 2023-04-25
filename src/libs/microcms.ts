import { MicroCMSQueries, createClient } from "microcms-js-sdk";
const client=createClient({
    serviceDomain: import.meta.env.DOMAIN,
    apiKey: import.meta.env.API_KEY
})

//一覧
//MicroCMSQueries型指定
export const getBlogs= async(queries : MicroCMSQueries)=>{
    //queriesはタイトルはID、設定すると抽出される
    return await client.get({endpoint:"blogs",queries})
}

//詳細抜き出し　getListDetail
//queriesの引数に[?]とやるとあってもなくてもいいという意味になる
export const getBlogDetail= async(blogId:string,queries? : MicroCMSQueries)=>{
    //queriesはタイトルはID、設定すると抽出される
    return await client.getListDetail({endpoint:"blogs",contentId:blogId,queries})
}