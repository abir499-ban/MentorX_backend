export async function extractToken(RequestHeaderObject){
    // const [type, token] = RequestHeaderObject.authorization?.split(' ') ?? []
    // return type === 'Bearer' ? token : undefined;

    const authToken = RequestHeaderObject.authorization;
    if(!authToken) return undefined;
    const [type, token] = authToken.split(' ') || []
    return type === 'Bearer' ? token : undefined
}