# 1️⃣ Base image
FROM node:20-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy Prisma schema
COPY prisma ./prisma

# 6️⃣ Generate Prisma client
RUN npx prisma generate

# 7️⃣ Copy rest of the app
COPY . .

# 8️⃣ Build NestJS
RUN npm run build

# 9️⃣ Expose port
EXPOSE 5005

# 🔟 Start app
CMD ["npm", "run", "start:prod"]
