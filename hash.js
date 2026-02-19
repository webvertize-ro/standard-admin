import bcrypt from 'bcryptjs';

const hashedPassword = await bcrypt.hash('StandardAdmin!23', 12);

console.log('hashedPassword', hashedPassword);
