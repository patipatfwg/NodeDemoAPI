FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5623
CMD [ "node", "server.js" ]
# CMD [ "nodemon", "--legacy-watch", "server.js" ]
# "start": "nodemon --legacy-watch server.js"



# docker build -t patipatfwg/fwghrapi .
# docker run --name fwghrapi-api --restart always -v "$PWD":/usr/src/app -p 56872:5000 -d patipatfwg/fwghrapi