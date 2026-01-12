import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Check if SUPER_ADMIN already exists
  const existingSuperAdmin = await prisma.admin.findFirst({
    where: { role: 'SUPER_ADMIN' },
  });

  if (existingSuperAdmin) {
    console.log('✅ SUPER_ADMIN already exists:', existingSuperAdmin.email);
    return;
  }

  // Create SUPER_ADMIN
  const hashedPassword = await bcrypt.hash('SuperAdmin@123', 10);

  const superAdmin = await prisma.admin.create({
    data: {
      email: 'superadmin@fineasy.com',
      password: hashedPassword,
      name: 'Super Administrator',
      role: 'SUPER_ADMIN',
    },
  });

  console.log('\n✅ SUPER_ADMIN created successfully!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📧 Email:', superAdmin.email);
  console.log('🔑 Password: SuperAdmin@123');
  console.log('👤 Name:', superAdmin.name);
  console.log('🎭 Role:', superAdmin.role);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n⚠️  IMPORTANT: Change the password after first login!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
