//처음에 Router의 argument로 사용되는 isLoggedIn을 defaults 에서 정의하고 Mutation은 resolvers에서 정의한다

export const defaults = {
    //localStorage에 token이 저장되어있을 경우 true 아닐 경우 false를 return 한다.
    isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

export const resolvers = {
    Mutation: {
        //logUserIn Mutation은 token, cache를 인자로 받아서 저장한다.
        logUserIn: (_, { token }, { cache }) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data:{
                    isLoggedIn: true
                }
            });
            return null;
        },
        //logUserOut Mutation은 token, cache를 초기화한다.
        logUserOut: (_, __, { cache }) => {
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }
    }
}