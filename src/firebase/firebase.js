import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGP--Y0PXYunox7TXU8XmwknSed1mZjRc',
  authDomain: 'bestapocalypticbooks.firebaseapp.com',
  databaseURL: 'https://bestapocalypticbooks.firebaseio.com',
  projectId: 'bestapocalypticbooks',
  storageBucket: 'bestapocalypticbooks.appspot.com',
  messagingSenderId: '627300782228',
  appId: '1:627300782228:web:c8e953b710e99a687a6481',
  measurementId: 'G-D7MC31YZJG',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

// Helper function for camelCase string
function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

export async function getBook(title) {
  const docRef = firestore.collection('books').doc(title);
  const doc = await docRef.get();
  if (doc.exists) {
    return doc.data();
  } else {
    console.log('No such document!');
  }
  return doc;
}

export async function getCarouselItems(tag) {
  const booksRef = firestore.collection('books');
  const query = booksRef.where('tags', 'array-contains', `${tag}`);
  return await query.get().then(function (querySnapshot) {
    let result = [];
    querySnapshot.forEach(function (doc) {
      const bookData = doc.data();
      bookData.description = bookData.description.split('*');
      result.push(bookData);
    });
    return result;
  });
}

export const createBook = ({
  title,
  author,
  series,
  seriesNumber,
  description,
  tags,
  audiobook,
  audio,
  kindle,
  paperback,
  featured,
  coverFile,
}) => {
  const titleCameled = camelize(title);
  tags = tags.split(',');
  const links = {
    audiobook,
    kindle,
    paperback,
  };

  if (series && seriesNumber) {
    series = { name: series, number: seriesNumber };
  } else {
    series = { name: '', number: '' };
  }

  const docRef = firestore.collection('books').doc(titleCameled);

  // You have to set the series name and number into an object if both are defined
  docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        storeCoverPic(titleCameled, coverFile);
        docRef
          .update({
            title,
            author,
            series,
            description,
            tags,
            links,
            audio,
            featured,
          })
          .then(() => alert('book updated'))
          .catch((error) => alert(error, 'failed to update book'));
      } else {
        storeCoverPic(titleCameled, coverFile);
        docRef
          .set({
            title,
            author,
            series,
            description,
            tags,
            links,
            audio,
            featured,
          })
          .then(() => alert('book added'))
          .catch((error) => alert(error, 'failed to add book'));
      }
    })
    .catch((error) => alert('Error getting document:', error));
};

export async function getOptions(toGet) {
  const booksRef = firestore.collection('books');
  return await booksRef.get().then(function (querySnapshot) {
    const result = [];
    querySnapshot.forEach(function (doc) {
      const option = doc.get(toGet);
      if (option !== undefined) {
        if (typeof option === 'object') {
          option.forEach((opt) => {
            if (!result.includes(opt)) {
              result.push(opt);
            }
          });
        } else {
          if (!result.includes(option)) {
            result.push(option);
          }
        }
      }
    });
    return result;
  });
}

export const storeCoverPic = (bookTitleCameled, picToUpload) => {
  const storageRef = storage.ref(`${bookTitleCameled}/cover`);
  storageRef.put(picToUpload).then(function () {
    storageRef
      .getDownloadURL()
      .then(function (picUrl) {
        const userRef = firestore.doc(`books/${bookTitleCameled}`);
        userRef.update({ picUrl });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
