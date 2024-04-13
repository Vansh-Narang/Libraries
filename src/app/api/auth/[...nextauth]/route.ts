// import { handlers } from "../../../auth" // Referring to the auth.ts we just created
// export const { GET, POST } = handlers
import Nextauth from "next-auth"
import GithubProvider from "next-auth/providers/github"
const handler = Nextauth({
    providers: [
        GithubProvider({
            clientId: "d8055e23aed441c9597f",
            clientSecret: "b8f563822863d615efdccf853164df2c99856694",
        }),
    ]

})
export { handler as GET, handler as POST }