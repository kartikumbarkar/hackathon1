npx create-next-app@latest --ts
npm install --save-dev typescript
npm i prisma --save-dev
npx prisma init
npx prisma db push
npx prisma studio
npm i @prisma/client 
# above commands allow us to access prisma from nextjs
npx prisma generate
# whenever there is change in schema or model we have to do it
npx prisma format 