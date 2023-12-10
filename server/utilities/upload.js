import multer from 'multer';

console.log('inside multer ');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Specify the destination folder
  },
  filename: function (req, file, cb) {
      console.log('inside multer ');
      cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
  }
});

const fileFilter = (req, file, cb) => {
  // Check if the file is an image
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image files are allowed!'), false);
  }

  cb(null, true);
}


export const upload = multer({ 
  storage: storage,
  // limits: {
  //   fileSize: 3 * 1024 * 1024 // 3MB limit
  // },
  // fileFilter: fileFilter
 });

