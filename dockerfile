FROM node

WORKDIR /node-app

COPY package.json  /node-app/  

RUN npm install

RUN npm install nodemon -g 

COPY . .

EXPOSE 5000

 CMD [ "npm", "run", "start" ] 
