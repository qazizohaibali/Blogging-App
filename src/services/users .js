import fs from 'fs';
import path from 'path';
import { hash } from 'bcrypt';
import { compare } from 'bcrypt';

const filePath = path.join(process.cwd(), "src", "data", "users.json");

export function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id));
}
export function getByEmail(email) {
    const data = getAll();
    return data.find(p => p.email === email);
}
export async function verifyPassword(hashedPasword, password) {
    const isValid = await compare(password, hashedPasword);
    return isValid;
}

export async function save (email, password) {
    const found = getByEmail(email);
    if (found) {
        throw new Error("user already exist.");
    }
    const data = getAll();
    const hashedpassword = await hash(password, 12);
    data.push({
        id: data.length + 1,
        email,
        password: hashedpassword
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}