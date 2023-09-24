import { compare } from 'bcryptjs';

export async function compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
}