export async function extractToken(RequestHeaderObject){
    const [type, token] = RequestHeaderObject.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined;
}