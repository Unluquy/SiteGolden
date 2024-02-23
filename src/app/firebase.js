// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import ExcelJS from 'exceljs';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5J5o0BG-sxcLQPZAmBow7wngUY59Wew",
  authDomain: "sitegoldenpsycho.firebaseapp.com",
  projectId: "sitegoldenpsycho",
  storageBucket: "sitegoldenpsycho.appspot.com",
  messagingSenderId: "525071402442",
  appId: "1:525071402442:web:be8d1035e43d506181fb33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 

const db = getFirestore(app);

// export function downloadCSV() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//       fetchData();
//   }, []);

//   const fetchData = async () => {
//       try {
//           const snapshot = await db.collection('data').get();
//           const fetchedData = snapshot.docs.map(doc => doc.data());
//           setData(fetchedData);
//       } catch (error) {
//           console.error('Error fetching data:', error);
//       }
//   };

//   const downloadExcel = async () => {
//       const workbook = new ExcelJS.Workbook();
//       const sheet = workbook.addWorksheet('Data');

//       // Add headers
//       sheet.columns = [
//           { header: 'Errors', key: 'errors' },
//           { header: 'Founds', key: 'founds' },
//           { header: 'TBF', key: 'tbf' },
//           { header: 'Score', key: 'score' },
//       ];

//       // Add data rows
//       data.forEach(item => {
//           sheet.addRow({
//               errors: item.errors,
//               founds: item.founds,
//               tbf: item.tbf,
//               score: item.score,
//           });
//       });

//       // Generate buffer
//       const buffer = await workbook.xlsx.writeBuffer();

//       // Create Blob from buffer
//       const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

//       // Create download link
//       const downloadLink = document.createElement('a');
//       downloadLink.href = window.URL.createObjectURL(blob);
//       downloadLink.download = 'data.xlsx';

//       // Trigger download
//       downloadLink.click();
//   };

//   return (
//       <div>
//           <button onClick={downloadExcel}>Download Excel</button>
//       </div>
//   );
// }

export const getData = async () => {
  console.log("object");
  const snapshot = await getDocs(collection(db, 'data'));

  const documents = snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  
  return {
    props: {
      documents,
    },
  };
};
