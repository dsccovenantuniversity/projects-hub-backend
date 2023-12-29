# projects-hub-backend

first run 
```npm install``` then 
```npx prisma generate``` then
```npx prisma migrate dev``` <br>
You should already have postgres installed and created a db named projectshub locally.<br>
create a .env file and add 
```DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"``` <br>
Note: ensure the database url is urlencoded e.g %20 for whitespaces<br>
```run npx prisma migrate dev --name version``` according to changes e.g 1.0.4 upon every schema change made by you and 
```npx prisma dbPush``` upon every change made by someone else
