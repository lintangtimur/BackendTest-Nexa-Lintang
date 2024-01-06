const router = require("express").Router();
const { body, query, param } = require('express-validator');
const validateToken = require("../middleware/validateToken")

const {
  addKaryawan,
  searchKaryawan,
  updateKaryawan,
  updateStatusKaryawan
} = require("../controllers/user_controller");

const {
    signIn, signUp
} = require("../controllers/auth_controller");


//Untuk tambah user baru
router.post("/signup", [
  body("username").notEmpty().withMessage("username harus diisi").matches(/^[a-zA-Z0-9\s]+$/).withMessage('username hanya boleh mengandung huruf dan angka'),
  body("password").notEmpty().withMessage("password harus diisi"),
], signUp)

//User melakukan login/signin
router.post("/signIn", [
  body("username").notEmpty().withMessage("username harus diisi").matches(/^[a-zA-Z0-9\s]+$/).withMessage('username hanya boleh mengandung huruf dan angka'),
  body("password").notEmpty().withMessage("password harus diisi")
], signIn)

//menambahkan data karyawan baru
router.post("/addKaryawan", validateToken, [
    body('nama').notEmpty().withMessage('Nama harus diisi').matches(/^[a-zA-Z\s]+$/).withMessage('Nama hanya boleh mengandung huruf dan spasi'),
    body('alamat').notEmpty().withMessage('Alamat harus diisi'),
    body('gender').notEmpty().withMessage('Gender harus diisi').isIn(['L', 'P']).withMessage('Gender hanya boleh L atau P'),
    body('photo').notEmpty().withMessage('Photo harus diisi'),
    body('tgl_lahir').notEmpty().withMessage('Tanggal lahir harus diisi').isISO8601().toDate().withMessage('Format tanggal lahir salah'),
    body('status').notEmpty().withMessage('Status harus diisi').isInt().withMessage('Status harus berupa angka'),
], addKaryawan)

//fetch data karyawan menggunakan pagination
router.get('/karyawan', validateToken, [
  query('keyword')
    .notEmpty().withMessage('Keyword harus diisi')
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('Keyword hanya boleh mengandung huruf, angka, dan spasi'),
  query('start')
    .optional().isInt().withMessage('Start harus berupa bilangan bulat'),
  query('count')
    .optional().isInt().withMessage('Count harus berupa bilangan bulat'),
], searchKaryawan)



router.put('/update_karyawan/:nip', validateToken, [
  param('nip')
    .notEmpty().withMessage('NIP harus diisi')
    .isNumeric().withMessage('NIP harus berupa angka')
    .isLength({ min: 8, max: 8 }).withMessage('NIP harus terdiri dari 8 digit'),

  body('nama')
    .optional()
    .matches(/^[a-zA-Z\s]+$/).withMessage('Nama hanya boleh mengandung huruf dan spasi'),

  body('alamat')
    .optional()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('Alamat hanya boleh mengandung huruf, angka, dan spasi'),

  body('gender')
    .optional()
    .matches(/^[LP]$/).withMessage('Gender hanya boleh L atau P'),

  body('photo')
    .optional()
    .custom((value, { req }) => {
      if (!req.files || Object.keys(req.files).length === 0) {
        throw new Error('File photo harus diunggah');
      }
      return true;
    }),

  body('tgl_lahir')
    .optional()
    .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('Format tanggal lahir harus YYYY-MM-DD'),

  body('status')
    .optional()
    .isInt({ min: 1, max: 9 }).withMessage('Status hanya boleh angka 1-9'),
], updateKaryawan)

router.put('/update_status/:nip', validateToken, [
  param('nip')
    .notEmpty().withMessage('NIP harus diisi')
    .isNumeric().withMessage('NIP harus berupa angka')
    .isLength({ min: 8, max: 8 }).withMessage('NIP harus terdiri dari 8 digit'),
], updateStatusKaryawan)

module.exports = router;