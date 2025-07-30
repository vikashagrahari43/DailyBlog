import { Client, Databases, ID, Query, Storage } from "appwrite";
import Assets from "../BackendAssets/Assets";

export class post{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(Assets.Url)
        .setProject(Assets.ProjectId)

        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client)
        
    }

    async createPost({title,slug, content, featuredImage, status, userId}){
            try {
                return await this.database.createDocument(
                    Assets.DatabaseId , 
                    Assets.CollectionId , 
                    slug,
                    {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                            }
            )
            } catch (error) {
                console.log(error)
            }
    }

    async deletePost(slug){
        try {
            return await this.database.deleteDocument(
                Assets.DatabaseId,
                Assets.CollectionId,
                slug,
            );
        } catch (error) {
            console.log(error)
        }
    }


    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                Assets.DatabaseId,
                Assets.CollectionId,
                slug,
                {
                    title, 
                    content,
                    featuredImage, 
                    status
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                Assets.DatabaseId,
                Assets.CollectionId,
                slug,
                
            )
        } catch (error) {
            console.log(error)
        }
    }


    async getAllPost(queries = [Query.equal("status" , "active")]){
        try {
            return await this.database.listDocuments(
                Assets.DatabaseId,
                Assets.CollectionId,
                queries
                
            )
        } catch (error) {
            console.log(error)
        }
    }

    //file upload kiya jaye ab

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                Assets.BucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                Assets.BucketId,
                fileId
            )
             return true
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    filePreview(fileId){
       
            try {
                 return this.bucket.getFilePreview(
                     Assets.BucketId,
                    fileId
                 )
            } catch (error) {
                console.log(error)
            }
        }
    }

const postservice = new post();
export default postservice