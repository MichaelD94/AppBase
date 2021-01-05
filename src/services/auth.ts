interface Response {
    token: string
    user: {
        name:string,
        email: string
    }
}
export function signIn(): Promise<Response> {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({
                token: 'hefbjshadfbiksaudjghfksnfosksjkbfijhfbdsfbhe',
                user: {
                    name: 'Michael',
                    email: 'md.p@gmail.com'
                },
            });
        }, 3000);
    })
}