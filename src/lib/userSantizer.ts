export function userSanitizer(user){
    const sanitized = user.toObject()
    delete sanitized['password']
    return sanitized
}