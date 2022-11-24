Creating the first Seed *model name should using s at last
npx sequelize-cli seed:generate --name users(name of model+s => like in mysql)

Running All Seeds
npx sequelize-cli db:seed:all

Running One Seed
npx sequelize-cli db:seed --seed target.js