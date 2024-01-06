const prisma = require("../connection/connection.js");
const { validationResult } = require('express-validator');

async function generateNextNIP() {
  const currentYear = new Date().getFullYear();
  const lastEmployee = await prisma.karyawan.findFirst({
      orderBy: { nip: 'desc' },
  });

  let counter = 1;

  let lastNIP_substr = ""
  let nip_plusone = ""
  if (lastEmployee) {
      const lastNIP = lastEmployee.nip;
      const lastYear = parseInt(lastNIP.substring(0, 4));
      lastNIP_substr = parseInt(lastNIP.substring(4));
      nip_plusone = lastNIP_substr + 1
      
      // if (lastYear === currentYear) {
      //     counter = parseInt(lastNIP.substring(4)) + 1;
      // }
  }

  const paddedCounter = nip_plusone.toString().padStart(4, '0');
  console.log(`${currentYear}${paddedCounter}`)
  return `${currentYear}${paddedCounter}`;
}

async function addKaryawan(req, res){
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nama, alamat, gender, photo, tgl_lahir, status } = req.body;

    // Generate NIP baru
    const nip = await generateNextNIP();

    // Menyimpan photo dalam bentuk base64
    const base64Photo = Buffer.from(photo, 'base64').toString('binary');

    
    // Menyimpan karyawan ke database
    const newEmployee = await prisma.karyawan.create({
        data: {
            nip,
            nama,
            alamat,
            gend: gender,
            photo: base64Photo,
            tgl_lahir: new Date(tgl_lahir),
            status: 1,
            // insert_by: req.decoded.username,
            // update_by: req.decoded.username,
            id: 0
        },
    });


    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: '/api/addKaryawan',
        request: JSON.stringify(req.body),
        response: JSON.stringify({"status": 200, "data": newEmployee}), 
      },
    });

    res.json(newEmployee);
  } catch (error) {
    console.error(error);

    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: '/api/addKaryawan',
        request: JSON.stringify(req.body),
        response: JSON.stringify({"status":500, error: "gagal tambah karyawan" }),
      },
    });
    res.status(500).json({ message: 'Gagal menambahkan karyawan' });
  }
}

async function searchKaryawan(req, res){
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { keyword, start = 0, count = 10 } = req.query;

    // Query ke database dengan pencarian dan paginasi
    const employees = await prisma.karyawan.findMany({
      where: {
        nama: {
          contains: keyword,
        },
      },
      skip: Number(start),
      take: Number(count),
    });

    // Menangani jika data tidak ditemukan
    if (employees.length === 0) {
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: 'GET /api/karyawan',
        request: JSON.stringify(req.query),
        response: JSON.stringify({"status": 200, "data": employees}), 
      },
    });

    res.json(employees);
  } catch (error) {

    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: 'GET /api/karyawan',
        request: JSON.stringify(req.query),
        response: JSON.stringify({"status":500, error: "error filter karyawan" }),
      },
    });

    res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateKaryawan(req, res){
  try {
    // Jalankan validasi Express Validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Dapatkan data dari body request
    const { nama, alamat, gender, photo, tgl_lahir } = req.body;
    const nip = req.params.nip

    console.log(nip)
    
    const existingEmployee = await prisma.karyawan.findUnique({
      where: {
        nip: nip
      },
    });

    if (!existingEmployee) {
      return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
    }


    const updatedEmployee = await prisma.karyawan.update({
      where: {
        nip: nip,
      },
      data: {
        nama,
        alamat,
        gender,
        photo,
        tgl_lahir,
        
      },
    });

    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: '/api/update_karyawan/'+nip,
        request: JSON.stringify(req.body),
        response: JSON.stringify({"status": 200, "data": updatedEmployee}), 
      },
    });

    res.json(updatedEmployee);
  } catch (error) {
    console.error(error);
    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: '/api/update_karyawan',
        request: JSON.stringify(req.body),
        response: JSON.stringify({"status":500, error: "gagal update karyawan" }),
      },
    });
    res.status(500).json({ message: 'Gagal memperbarui karyawan' });
  }
}

async function updateStatusKaryawan(req, res){
  try {
    
    const errors = require('express-validator').validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const nip = req.params.nip;

    // Cek apakah karyawan dengan NIP tertentu ada di database
    const existingKaryawan = await prisma.karyawan.findUnique({
      where: {
        nip: nip,
      },
    });

    if (!existingKaryawan) {
      return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
    }

    // operasi penonaktifan dengan mengubah status menjadi 9
    const nonaktifkanKaryawan = await prisma.karyawan.update({
      where: {
        nip: nip,
      },
      data: {
        status: 9, // Mengubah status menjadi 9
      },
    });

    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: '/api/update_status/'+nip,
        request: JSON.stringify(req.body),
        response: JSON.stringify({"status": 200, "data": nonaktifkanKaryawan}), 
      },
    });

    res.json(nonaktifkanKaryawan);
  } catch (error) {
    
    console.error(error);

    await prisma.log_trx_api.create({
      data: {
        user_id: "1",
        api: '/api/update_status',
        request: JSON.stringify(req.body),
        response: JSON.stringify({"status":500, error: "gagal update status karyawan" }),
      },
    });

    // Kirim respon dengan status 500 dan pesan kesalahan
    res.status(500).json({ message: 'Gagal menonaktifkan karyawan' });
  }
}

module.exports = {
  addKaryawan: addKaryawan,
  searchKaryawan: searchKaryawan,
  updateKaryawan: updateKaryawan,
  updateStatusKaryawan: updateStatusKaryawan
}