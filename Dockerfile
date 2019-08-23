FROM node

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

EXPOSE 5000
CMD [ "node", "server.js" ]

# docker build -t patipatfwg/hractivity .
# docker run --name hractivity-api --restart always -v "$PWD":/usr/src/app -p 56872:5000 -d patipatfwg/hractivity