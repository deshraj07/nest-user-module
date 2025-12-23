// import { PrismaPg } from '@prisma/adapter-pg';
// import { Pool } from 'pg';
// import { PrismaClient } from '../src/generated/prisma/client';

// // Local Postgres connection
// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// const prisma = new PrismaClient({
//   adapter: new PrismaPg(pool),
//   log: ['query', 'info', 'warn', 'error'],
// });

// async function main() {
//   // Dummy Users
//   await prisma.user.createMany({
//    data: [
//   {
//     name: "John Doe 1",
//     email: "john1@example.com",
//     role: "Student",
//     status: "Active",
//     subscription: "Pro",
//     joinedDate: new Date(),
//     lastActive: "2024-12-10",
//     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Jane Smith 1",
//     email: "jane1@example.com",
//     role: "Moderator",
//     status: "Suspended",
//     subscription: "Free",
//     joinedDate: new Date(),
//     lastActive: "2024-11-01",
//     avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "Michael Johnson 1",
//     email: "michael1@example.com",
//     role: "Moderator",
//     status: "Active",
//     subscription: "Monthly",
//     joinedDate: new Date(),
//     lastActive: "2024-11-20",
//     avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Emily Davis 1",
//     email: "emily1@example.com",
//     role: "Student",
//     status: "Active",
//     subscription: "Yearly",
//     joinedDate: new Date(),
//     lastActive: "2024-12-01",
//     avatar: "https://randomuser.me/api/portraits/women/4.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Chris Williams 1",
//     email: "chris1@example.com",
//     role: "Moderator",
//     status: "Banned",
//     subscription: "Free",
//     joinedDate: new Date(),
//     lastActive: "2024-10-15",
//     avatar: "https://randomuser.me/api/portraits/men/5.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "Sophia Brown 1",
//     email: "sophia1@example.com",
//     role: "Student",
//     status: "Suspended",
//     subscription: "Monthly",
//     joinedDate: new Date(),
//     lastActive: "2024-09-20",
//     avatar: "https://randomuser.me/api/portraits/women/6.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "David Wilson 1",
//     email: "david1@example.com",
//     role: "Student",
//     status: "Active",
//     subscription: "Pro",
//     joinedDate: new Date(),
//     lastActive: "2024-12-05",
//     avatar: "https://randomuser.me/api/portraits/men/7.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Olivia Martinez 1",
//     email: "olivia1@example.com",
//     role: "Moderator",
//     status: "Active",
//     subscription: "Free",
//     joinedDate: new Date(),
//     lastActive: "2024-11-29",
//     avatar: "https://randomuser.me/api/portraits/women/8.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Daniel Anderson 1",
//     email: "daniel1@example.com",
//     role: "Moderator",
//     status: "Suspended",
//     subscription: "Monthly",
//     joinedDate: new Date(),
//     lastActive: "2024-10-25",
//     avatar: "https://randomuser.me/api/portraits/men/9.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "Ava Thompson 1",
//     email: "ava1@example.com",
//     role: "Student",
//     status: "Active",
//     subscription: "Yearly",
//     joinedDate: new Date(),
//     lastActive: "2024-12-03",
//     avatar: "https://randomuser.me/api/portraits/women/10.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "John Doe 2",
//     email: "john2@example.com",
//     role: "Moderator",
//     status: "Active",
//     subscription: "Pro",
//     joinedDate: new Date(),
//     lastActive: "2024-12-10",
//     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Jane Smith 2",
//     email: "jane2@example.com",
//     role: "Moderator",
//     status: "Suspended",
//     subscription: "Free",
//     joinedDate: new Date(),
//     lastActive: "2024-11-01",
//     avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "Michael Johnson 2",
//     email: "michael2@example.com",
//     role: "Moderator",
//     status: "Suspended",
//     subscription: "Monthly",
//     joinedDate: new Date(),
//     lastActive: "2024-11-20",
//     avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Emily Davis 2",
//     email: "emily2@example.com",
//     role: "Student",
//     status: "Suspended",
//     subscription: "Yearly",
//     joinedDate: new Date(),
//     lastActive: "2024-12-01",
//     avatar: "https://randomuser.me/api/portraits/women/4.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Chris Williams 2",
//     email: "chris2@example.com",
//     role: "Moderator",
//     status: "Banned",
//     subscription: "Free",
//     joinedDate: new Date(),
//     lastActive: "2024-10-15",
//     avatar: "https://randomuser.me/api/portraits/men/5.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "Sophia Brown 2",
//     email: "sophia2@example.com",
//     role: "Student",
//     status: "Banned",
//     subscription: "Monthly",
//     joinedDate: new Date(),
//     lastActive: "2024-09-20",
//     avatar: "https://randomuser.me/api/portraits/women/6.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "David Wilson 2",
//     email: "david2@example.com",
//     role: "Moderator",
//     status: "Banned",
//     subscription: "Pro",
//     joinedDate: new Date(),
//     lastActive: "2024-12-05",
//     avatar: "https://randomuser.me/api/portraits/men/7.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Olivia Martinez 2",
//     email: "olivia2@example.com",
//     role: "Moderator",
//     status: "Banned",
//     subscription: "Free",
//     joinedDate: new Date(),
//     lastActive: "2024-11-29",
//     avatar: "https://randomuser.me/api/portraits/women/8.jpg",
//     isVerified: true,
//     isDelete: false
//   },
//   {
//     name: "Daniel Anderson 2",
//     email: "daniel2@example.com",
//     role: "Moderator",
//     status: "Banned",
//     subscription: "Monthly",
//     joinedDate: new Date(),
//     lastActive: "2024-10-25",
//     avatar: "https://randomuser.me/api/portraits/men/9.jpg",
//     isVerified: false,
//     isDelete: false
//   },
//   {
//     name: "Ava Thompson 2",
//     email: "ava2@example.com",
//     role: "Student",
//     status: "Banned",
//     subscription: "Yearly",
//     joinedDate: new Date(),
//     lastActive: "2024-12-03",
//     avatar: "https://randomuser.me/api/portraits/women/10.jpg",
//     isVerified: true,
//     isDelete: false
//   }

//  ],
//      skipDuplicates: true, 
//   });

//   await prisma.suspension.createMany({
//   data: [
//     {
//       userId: 1,
//       reason: 'Misinformation',
//       startDate: new Date('2024-10-23'),
//       duration: 3,
//     },
//     {
//       userId: 2,
//       reason: 'Harassment',
//       startDate: new Date('2024-10-23'),
//       duration: 7,
//     },
//     {
//       userId: 7,
//       reason: 'Spam',
//       startDate: new Date('2024-10-23'),
//       duration: 2,
//     },
//   ],
// });
// await prisma.ban.createMany({
//   data: [
//     {
//       userId:9,
//       reason: 'Misinformation',
//       bannedAt: new Date('2024-10-23'),
//     },
//     {
//       userId: 37,
//       reason: 'Harassment',
//       bannedAt: new Date('2024-10-23'),
//     },
//     {
//       userId: 10,
//       reason: 'Spam',
//       bannedAt: new Date('2024-10-23'),
//     },
//   ],
// });


//   console.log('Dummy users inserted!');
// }

// main()
//   .then(() => prisma.$disconnect())
//   .catch((err) => {
//     console.error(err);
//     prisma.$disconnect();
//   });


import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../src/generated/prisma/client';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
  log: ['query', 'info', 'warn', 'error'],
});

async function main() {
  // 1️⃣ Clear previous data
  await prisma.auditLog.deleteMany();
  await prisma.ban.deleteMany();
  await prisma.suspension.deleteMany();
  await prisma.user.deleteMany();

  // 2️⃣ Reset user ID sequence (PostgreSQL)
  await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`;

  // 3️⃣ Seed users
  const usersData = [
    // Moderators
    { name: 'Mod One', email: 'mod1@example.com', role: 'Moderator', status: 'Active', subscription: 'Monthly', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Mod Two', email: 'mod2@example.com', role: 'Moderator', status: 'Active', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Mod Three', email: 'mod3@example.com', role: 'Moderator', status: 'Active', subscription: 'Monthly', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Mod Four', email: 'mod4@example.com', role: 'Moderator', status: 'Active', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Mod Five', email: 'mod5@example.com', role: 'Moderator', status: 'Active', subscription: 'Monthly', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },

    // Students
    { name: 'Student One', email: 'stu1@example.com', role: 'Student', status: 'Active', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { name: 'Student Two', email: 'stu2@example.com', role: 'Student', status: 'Active', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { name: 'Student Three', email: 'stu3@example.com', role: 'Student', status: 'Suspended', subscription: 'Monthly', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { name: 'Student Four', email: 'stu4@example.com', role: 'Student', status: 'Suspended', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { name: 'Student Five', email: 'stu5@example.com', role: 'Student', status: 'Suspended', subscription: 'Yearly', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { name: 'Student Six', email: 'stu6@example.com', role: 'Student', status: 'Suspended', subscription: 'Yearly', avatar: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { name: 'Student Seven', email: 'stu7@example.com', role: 'Student', status: 'Banned', subscription: 'Yearly', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { name: 'Student Eight', email: 'stu8@example.com', role: 'Student', status: 'Banned', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { name: 'Student Nine', email: 'stu9@example.com', role: 'Student', status: 'Banned', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { name: 'Student Ten', email: 'stu10@example.com', role: 'Student', status: 'Banned', subscription: 'Yearly', avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { name: 'Student Eleven', email: 'stu11@example.com', role: 'Student', status: 'Active', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { name: 'Student Twelve', email: 'stu12@example.com', role: 'Student', status: 'Active', subscription: 'Yearly', avatar: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { name: 'Student Thirteen', email: 'stu13@example.com', role: 'Student', status: 'Active', subscription: 'Yearly', avatar: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { name: 'Student Fourteen', email: 'stu14@example.com', role: 'Student', status: 'Active', subscription: 'Free', avatar: 'https://randomuser.me/api/portraits/women/19.jpg' },
    { name: 'Student Fifteen', email: 'stu15@example.com', role: 'Student', status: 'Active', subscription: 'Yearly', avatar: 'https://randomuser.me/api/portraits/men/20.jpg' },
  ];

  const users = await prisma.user.createMany({
    data: usersData.map(u => ({
      ...u,
      joinedDate: new Date(),
      lastActive: new Date().toISOString(),
      isVerified: true,
      isDelete: false,
    })),
    skipDuplicates: true,
  });

  // 4️⃣ Seed suspensions (use new IDs)
  const suspensionsData = [
    { userId: 8, reason: 'Misinformation', startDate: new Date(), duration: 3 }, // Student Three
    { userId: 9, reason: 'Harassment', startDate: new Date(), duration: 5 },    // Student Four
    { userId: 10, reason: 'Spam', startDate: new Date(), duration: 2 },          // Student Ten
    { userId: 11, reason: 'Harassment', startDate: new Date(), duration: 4 }
  ];
  await prisma.suspension.createMany({ data: suspensionsData });

  // 5️⃣ Seed bans (use new IDs)
  const bansData = [
    { userId: 12, reason: 'Harassment', bannedAt: new Date() }, // Student Six
    { userId: 13, reason: 'Spam', bannedAt: new Date() },       // Student Seven
    { userId: 14, reason: 'Misinformation', bannedAt: new Date() }, // Student Eight
    { userId: 15, reason: 'Harassment', bannedAt: new Date() }, // Student Three (if needed)
  ];
  await prisma.ban.createMany({ data: bansData });

  // 6️⃣ Seed audit logs (sync with new IDs)
  const auditLogsData = [
    { moderatorId: 1, studentId: 8, action: 'Suspended', reason: 'Misinformation' }, // Mod One -> Student Three
    { moderatorId: 2, studentId: 9, action: 'Suspended', reason: 'Harassment' },    // Mod Two -> Student Four
    { moderatorId: 3, studentId: 10, action: 'Suspended', reason: 'Spam' },          // Mod Three -> Student Ten
    { moderatorId: 4, studentId: 11, action: 'Suspended', reason: 'Harassment' },    // Mod Four -> Student Five
    { moderatorId: 5, studentId: 12, action: 'Banned', reason: 'Harassment' },       // Mod Five -> Student Six
    { moderatorId: 5, studentId: 13, action: 'Banned', reason: 'Spam' },             // Mod Five -> Student Seven
    { moderatorId: 5, studentId: 14, action: 'Banned', reason: 'Misinformation' },   // Mod Five -> Student Eight
    { moderatorId: 3, studentId: 15, action: 'Banned', reason: 'Harassment' },       // Mod Three -> Student Three
  ];
  await prisma.auditLog.createMany({ data: auditLogsData });

  console.log('✅ Full seed complete! Users, suspensions, bans, and audit logs synced!');
}

main()
  .then(() => prisma.$disconnect())
  .catch(err => {
    console.error(err);
    prisma.$disconnect();
  });
