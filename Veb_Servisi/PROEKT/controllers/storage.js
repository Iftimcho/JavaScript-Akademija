const fs = require('fs');
const path = require('path');

module.exports = {
  fetch: (req, res) => {
      
    const storageDirectory = path.join(__dirname, '..', 'uploads', req.user._id);

    if (!fs.existsSync(`${storageDirectory}/${req.params.filename}`)) {
      return res.status(404).send({
        error: true,
        message: 'File not found!'
      });
    }

    res.download(`${storageDirectory}/${req.params.filename}`);
  },
  upload: (req, res) => {
    const file = req.files.document;
    const maxFileSize = 5 * 1024 * 1024; // 5 MB
    const allowedTypes = [
      'image/jpeg',
      'image/gif',
      'image/png'
    ];

    if (!allowedTypes.includes(file.mimetype)) {
      return res.status(400).send({
        error: true,
        message: 'Bad request. File type is not allowed.'
      });
    }

    if (file.size > maxFileSize) {
      return res.status(400).send({
        error: true,
        message: 'Bad request. File size exceeds the allowed limit.'
      });
    }

    const storageDirectory = path.join(__dirname, '..', 'uploads', req.user._id);
    console.log(storageDirectory);
    if (!fs.existsSync(storageDirectory)) {
      fs.mkdirSync(storageDirectory);
    }

    const fileName = `${req.user._id}_${file.name}`;

    file.mv(`${storageDirectory}/${fileName}`);

    res.status(201).send({
      error: false,
      message: `File with name ${fileName} is uploaded successfully!`
    });
  },
  delete: (req, res) => {
    const storageDirectory = path.join(__dirname, '..', 'uploads', req.user._id);
    const file = `${storageDirectory}/${req.params.filename}`

    if (!fs.existsSync(file)) {
      return res.status(404).send({
        error: true,
        message: 'File not found!'
      });
    }

    fs.unlinkSync(file)

    res.send({
      error: false,
      message: `File with path ${file} is successfully deleted.`
    })
  }
};