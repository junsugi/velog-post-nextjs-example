import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import {NextApiRequest} from "next";

export default NextAuth({
    providers: [
        Providers.Credentials({
            id: "email-password-credential",
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@test.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<any, any>, req: NextApiRequest){
                const email = credentials.email;
                const password = credentials.password;
                if(email === "test@test.com" && password === "test"){
                    return credentials;
                }
                throw new Error("아이디 혹은 패스워드가 틀립니다.");
            }
        })
    ],
    pages: {
        signIn: '/login',
    }
})
