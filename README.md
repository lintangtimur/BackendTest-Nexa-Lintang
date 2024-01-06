
### Store Procedure dan View
Ada di file `db_function.sql`

### How to use this app

1. Clone repo ini
2. Rename `.env.example` menjadi `.env`, lalu isi sesuai dengan DB confignya NEXA. Contoh mysql://DB_USERNAME:DB_PASS@DBHOST:3306/DBNAME
3. Ketik perintah `docker-compose up --build`
```
PS D:\Code\2023\backendtest-nexa> docker-compose up --build
[+] Building 0.4s (10/10) FINISHED
 => [app internal] load build definition from dockerfile                                                           0.0s
 => => transferring dockerfile: 515B                                                                               0.0s
 => [app internal] load .dockerignore                                                                              0.0s
 => => transferring context: 52B                                                                                   0.0s
 => [app internal] load metadata for docker.io/library/node:20-alpine                                              0.0s
 => [app 1/5] FROM docker.io/library/node:20-alpine                                                                0.0s
 => [app internal] load build context                                                                              0.0s
 => => transferring context: 3.45kB                                                                                0.0s
 => CACHED [app 2/5] WORKDIR /app                                                                                  0.0s
 => CACHED [app 3/5] COPY package*.json ./                                                                         0.0s
 => CACHED [app 4/5] RUN npm install                                                                               0.0s
 => [app 5/5] COPY . .                                                                                             0.1s
 => [app] exporting to image                                                                                       0.2s
 => => exporting layers                                                                                            0.2s
 => => writing image sha256:a6b65fceecc49a15a31f7609a9239e11d8b07aeed5b9487d076617be210cbfd7                       0.0s
 => => naming to docker.io/library/backendtest-nexa-app                                                            0.0s
[+] Running 1/1
 ✔ Container backendtest-nexa-app-1  Recreated                                                                     0.1s
Attaching to backendtest-nexa-app-1
backendtest-nexa-app-1  |
backendtest-nexa-app-1  | > backendtest-nexa@1.0.0 start
backendtest-nexa-app-1  | > node index.js
backendtest-nexa-app-1  |
backendtest-nexa-app-1  | Sat, 06 Jan 2024 06:37:52 GMT body-parser deprecated undefined extended: provide extended option at index.js:8:20
backendtest-nexa-app-1  | Listening port 3000
```
4. Jika berhasil seharusnya sudah listening ke port `3000`

### Postman
Disedikan postman collection jika ingin tes via postman, silahkan di import. `nexa_postman_collection.json`

### API
| Method  | Endpoint  | Header Token (jwt)  | Required  |   |
|---|---|---|---|---|
|post| signup | no |
|post| signin | no |
|post|/api/addKaryawan| yes|
|get|/api/karyawan?keyword&start=0&count=5| yes|
|put|/api/update_karyawan/:nip| yes|
|put|/api/update_status/:nip| yes|