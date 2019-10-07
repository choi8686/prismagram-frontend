import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
    uri: "http://localhost:4000", //서버주소
    clientState: { //App이 실행되기 전에 동작하는 State
        defaults,
        resolvers
    }
})