import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { usersTable } from '../model/user.model.js';

export const postUser =  async (fullName, email, phone, role, avatarURL, salt, password) => {
    const [user] = await db.insert(usersTable).values({
        fullName,
        email,
        phone,
        role,
        avatarURL,
        salt,
        password
    }).returning({
        userId: usersTable.id,
    });

    return user.userId;
};

export const findUserByEmail = async (email) => {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email));

    return user;
};

export const getAllUsers = async () => {
    const users = await db.select().from(usersTable);

    return users;
};