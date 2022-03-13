const bcrypt = require('bcrypt')

export async function hashPassword(password: string) {
    let saltRounds = 12
    let salt = await bcrypt.genSalt(saltRounds)

    let hashPassword = await bcrypt.hash(password, salt)

    return hashPassword
}

export async function compareHash(sentPassword: string, hashedPassword: string) {
    let compare = await bcrypt.compare(sentPassword, hashedPassword)
    return compare
}