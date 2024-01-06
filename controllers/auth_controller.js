const prisma = require("../connection/connection.js");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const encryption_key = "byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x"
const initialization_vector = "X05IGQ5qdBnIqAWD"

function encryptAES(data, key) {
    const cipher = crypto.createCipheriv('aes-256-cbc',Buffer.from(encryption_key), Buffer.from(initialization_vector))
    var crypted = cipher.update(data, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}

async function signUp(req,res){
    try {
        const errors = validationResult(req);

        // Jika ada kesalahan, kirim respons dengan kesalahan
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const base64EncodedPassword = Buffer.from(hashedPassword, 'binary').toString('base64');

        const newUser = await prisma.admin.create({
            data: {
                username,
                password:base64EncodedPassword
            },
        })

        res.json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internval server error"
        })
    }
}

async function signIn(req,res){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {username, password} = req.body
        console.log(username)
        const user = await prisma.admin.findUnique({
            where: {username: username}
        })
        
        if(!user || !compareBase64EncodedPasswords(password, user.password)){
            return res.status(401).json({
                message: 'Username atau password salah'
            })
        }

        const token = generateToken(user.username, user.password)

        const admin_token = await prisma.admin_token.create({
            data: {
                id_admin: user.id,
                token: token
            },
        })

        await prisma.log_trx_api.create({
            data: {
              user_id: "1",
              api: '/api/signin',
              request: JSON.stringify(req.body),
              response: JSON.stringify({"status": 200, "msg": "berhasil login"}), 
            },
          });

        return res.json({
            "token": token
        })
    } catch (error) {
        console.log(error)

        await prisma.log_trx_api.create({
            data: {
              user_id: "1",
              api: '/api/signin',
              request: JSON.stringify(req.body),
              response: JSON.stringify({"status": 500, "msg": "gagal login"}), 
            },
          });

        res.status(500).json({
            message: "Internval server error"
        })
    }
}

function isValidPassword(plain, hashed){
    return bcrypt.compareSync(plain, hashed)
}

function compareBase64EncodedPasswords(inputPassword, storedPassword) {
  const decodedStoredPassword = Buffer.from(storedPassword, 'base64').toString('utf-8');
  
  // Use bcrypt to compare the passwords
  return bcrypt.compareSync(inputPassword, decodedStoredPassword);
  }

function generateToken(username, password) {
    const secretKey = 'nexatest'; 

    password = encryptAES(password, secretKey)
    
    const payload = { username, password };

    // Buat token menggunakan jwt.sign
    const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });

    return token;
}

module.exports = {
    signIn : signIn,
    signUp : signUp
}