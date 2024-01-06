CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_add_kary_and_log`(
  IN p_nip VARCHAR(255),
  IN p_nama VARCHAR(255),
  IN p_alamat VARCHAR(255),
  IN p_gender CHAR(1),
  IN p_photo VARCHAR(255),
  IN p_tgl_lahir DATE,
  IN p_status INT,
	IN p_insertby VARCHAR(100),
	IN p_updateby VARCHAR(100),
  OUT p_result VARCHAR(255)
)
BEGIN
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
	
  BEGIN
		DECLARE error_message VARCHAR(255);
    -- Get the error message
    GET DIAGNOSTICS CONDITION 1
      error_message = MESSAGE_TEXT;
    ROLLBACK;
		INSERT INTO log_trx_api (user_id, api, request, response, insert_at)
		VALUES (1, "db_procedure", "request", CONCAT('gagal simpan karena ada error: ', error_message), NOW());
  END;
	
	START TRANSACTION;
    INSERT INTO karyawan (nip, nama, alamat, gend, photo, tgl_lahir, status, insert_by, updated_by, id)
		VALUES (p_nip, p_nama, p_alamat, p_gender, p_photo, p_tgl_lahir, p_status, p_insertby, p_updateby, 0);
		
		INSERT INTO log_trx_api (user_id, api, request, response, insert_at)
		VALUES (1, "db_procedure", p_nip, "berhasil tambah data karyawan", NOW());
  COMMIT;
	
END

-- =========================================================================================================

CREATE VIEW karyawan_lintang AS
SELECT 
  (
    SELECT 
      COUNT(0) 
    FROM 
      `karyawan` `kar` 
    WHERE 
      (`kar`.`nip` <= `k`.`nip`)
  ) no, 
  `k`.`nip` `nip`, 
  `k`.`nama` `nama`, 
  `k`.`alamat` `alamat`, 
  (
    CASE WHEN (`k`.`gend` = 'L') THEN 'Laki-laki' WHEN (`k`.`gend` = 'P') THEN 'Perempuan' END
  ) `gender`, 
  DATE_FORMAT(`k`.`tgl_lahir`, '%d %M %Y') `Tanggal Lahir` 
FROM 
  `karyawan` `k`;
