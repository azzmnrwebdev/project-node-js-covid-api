# REST API with NodeJS with ExpressJS and Sequelize

build REST API with [NodeJS](https://nodejs.org), [ExpressJS](https://expressjs.com/), [Express Validator](https://express-validator.github.io/docs/), [Sequelize](https://sequelize.org/) & [JSON Web Token](https://jwt.io/)

## Authors

```
Fullname  : Muhammad Azzam Nur Alwi Mansyur
NIM       : 0110219060
Semester  : 5 | Ganjil
Major     : Teknik Informatika | TI-01 2019 | Regular pagi
Subject   : Backend Programming
```

## Documentation Postman

https://documenter.getpostman.com/view/17772002/UVsPQQnG

## Tools yang digunakan :

- ExpressJS
- Dotenv
- Sequelize
- Mysql2
- Express Validator
- Nodemon
- JSON Web Token
- Body Parser -> **(Optional)**
- Serve Favicon -> **(Optional)**

## Step by step

- siapkan folder project `your project name`

- inisiasi npm `npm init -y`

- install "express" -> `npm i express`

- install "mysql2" -> `npm i mysql2`

- install "express-validator" -> `npm i express-validator` untuk validasi data

- **(Optional)** install "body-parser" -> `npm i body-parser` untuk middleware nya

- untuk middleware bisa menggunakan bawaan expressJS dengan mengetikan perintah dibawah ini :

```
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
```

- **(Optional)** install "serve-favicon" -> `npm i serve-favicon` untuk add favicon

- **(Optional)** buat folder `public` tambahkan image untuk icon web dengan ekstensi nya `.ico` bukan PNG or JPG

- install "nodemon" -> `npm i nodemon`

- buat file dengan nama `server.js` untuk setup server app nya

- config nodemon masuk ke package.json dan tambahkan `"start": "nodemon server.js"` pada scripts

- mengkonfigurasi library "sequelize"

- install global "sequelize-cli" -> `npm install -g sequelize-cli`

- inisiasi "sequelize" -> `sequelize init`

- buat database `your database name`

- ubah nama file `config.json` menjadi `database.js` untuk import dotenv dan setup database

- configuration database -> create new file `.env`

- kita buat migration patients `sequelize model:create --name Patients --attributes name:string`

- kita eksekusi migrate untuk create structure tabel `sequelize db:migrate`

- jika ingin seperti laravel migrate:fresh, kita harus undo migrate `sequelize db:migrate:undo:all` lalu migrate ulang `sequelize db:migrate`

## For development

1. clone repository ini
2. run `yarn or npm install` untuk install dependency
3. run `npm start` and enjoy!!
