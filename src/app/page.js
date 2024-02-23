'use client'
import Image from "next/image";
import Link from "next/link";
import { getData } from "./firebase"
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Modal from './modal';

export const exportToExcel = (data) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Trouve');
  const sheet2 = workbook.addWorksheet('Erreur');
  const sheet3 = workbook.addWorksheet('Score');

  console.log(data);



  // Set headers
  const headers = ["ID", ...Array.from({ length: 30 }, (_, i) => (i + 1).toString())];
  sheet.addRow(headers);
  
  sheet.addRow([]);
  
  sheet.addRow(['Trouves']);
  // Fill data
  data.props.documents.forEach(item => {
    console.log("items",item);
    // found/tbh
    const founds = [item.id, ...Array.from({ length: 30 }, (_, i) =>  item.data.stats[i+1].founds + "/" + item.data.stats[i+1].tbf || 0)];
    
    const row = sheet.addRow(founds);
    row.eachCell((cell) => {
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });
  });
  
  sheet2.addRow(headers);
  sheet2.addRow(['Erreurs']);
  data.props.documents.forEach(item => {

    // errors
    const errors = [item.id, ...Array.from({ length: 30 }, (_, i) =>  item.data.stats[i+1].errors || 0)];

    const row = sheet2.addRow(errors);
    row.eachCell((cell) => {
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
  });

  });

  sheet3.addRow(headers);
  sheet3.addRow(['Scores']);
  data.props.documents.forEach(item => {

    // found/tbh
    const scores = [item.id, ...Array.from({ length: 30 }, (_, i) =>  item.data.stats[i+1].score || 0)];
    const sumOfScores = scores.slice(1).reduce((acc, curr) => acc + curr, 0);
    scores.push(sumOfScores);
    
    const row = sheet3.addRow(scores);
    row.eachCell((cell) => {
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
  });

  });

  // Generate Excel file
  workbook.xlsx.writeBuffer()
    .then(buffer => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'stats.xlsx');
    })
    .catch(error => {
      console.error('Error exporting to Excel:', error);
    });
};



export default function Home() { 
  
  const [downloading, setDownloading] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
   
   getData().then((documents) => {
    console.log("docs",documents);

    setDownloading(true);
    exportToExcel(documents);
    setDownloading(false);

  }).catch((error) => {
    console.error('Error fetching data:', error);
  });
    console.log('Password confirmed');
    setIsModalOpen(false);
  };


  const handleClick = () => {
    getData().then((documents) => {
      console.log("docs",documents);

      setDownloading(true);
      exportToExcel(documents);
      setDownloading(false);

    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
    
    // You can also include any other logic you want to execute here
  };

  return (
    <main className="flex flex-col items-center justify-center p-24 h-screen [&>*]:m-4 ">

        <h1 className=" text-5xl pb-24">Accueuil</h1>
        <input
          type="text"
          value={inputValue}
          placeholder="Nom"
          onChange={(e) => setInputValue(e.target.value)}
          className=" text-black rounded-md p-2"
        />

        <Link href={{
          pathname:"/testing",
          query:{pseudo: inputValue}
        }} className=" bg-green-500 p-3 rounded-md">Commencer</Link>
      

      {/* <downloadCSV></downloadCSV> */}
      <div className="flex flex-col justify-center items-center">
        <button onClick={handleOpenModal}>Download Data</button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      </div>
    </main>
  );
}
