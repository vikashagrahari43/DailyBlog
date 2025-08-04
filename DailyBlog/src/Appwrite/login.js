import Assets from "../BackendAssets/Assets";
import { Client, Account, ID } from "appwrite";

export class Auth {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(Assets.Url)
        .setProject(Assets.ProjectId)
        this.account = new Account(this.client)
    }

    async CreateAccount ({email, password, name}){
        try {
           const useraccount =  await this.account.create(ID.unique(),email, password, name)
            if (useraccount) {
                return await this.login({email, password})
            } else {
                return useraccount;
            }
        } catch (error) {
            console.log(error)
        }
    }

    async login ({email, password}){
        try {
           const session = await this.account.createEmailPasswordSession(email, password);
           if (session) {
                return await this.getCurrentUser();
            }
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
    }
}
const auth =  new Auth()
export default auth