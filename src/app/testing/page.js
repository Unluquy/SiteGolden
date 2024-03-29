'use client'

import React, { useRef }from 'react'
import { useRouter } from 'next/navigation';
import img_1 from '../../../public/img_1.jpg';
import img_2 from '../../../public/img_2.jpg';
import img_3 from '../../../public/img_3.jpg';
import img_4 from '../../../public/img_4.png';
import img_5 from '../../../public/img_5.png';
import img_6 from '../../../public/img_6.png';
import img_7 from '../../../public/img_7.jpg';
import img_8 from '../../../public/img_8.png';
import img_9 from '../../../public/img_9.png';
import img_10 from '../../../public/img_10.png';
import img_11 from '../../../public/img_11.png';
import img_12 from '../../../public/img_12.png';
import img_13 from '../../../public/img_13.png';
import img_14 from '../../../public/img_14.png';
import img_15 from '../../../public/img_15.png';
import img_16 from '../../../public/img_16.png';
import img_17 from '../../../public/img_17.png';
import img_18 from '../../../public/img_18.png';
import img_19 from '../../../public/img_19.png';
import img_20 from '../../../public/img_20.png';
import img_21 from '../../../public/img_21.png';
import img_22 from '../../../public/img_22.png';
import img_23 from '../../../public/img_23.png';
import img_24 from '../../../public/img_24.png';
import img_25 from '../../../public/img_25.jpg';
import img_26 from '../../../public/img_26.jpg';
import img_27 from '../../../public/img_27.png';
import img_28 from '../../../public/img_28.png';
import img_29 from '../../../public/img_29.png';
import img_30 from '../../../public/img_30.png';
import { useSearchParams,   } from "next/navigation";
import { Suspense } from 'react'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import firebase from '../firebase';
import { getFirestore, setDoc, collection, doc } from 'firebase/firestore/lite';

const db = getFirestore(firebase.app);

const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_10,
    img_11,
    img_12,
    img_13,
    img_14,
    img_15,
    img_16,
    img_17,
    img_18,
    img_19,
    img_20,
    img_21,
    img_22,
    img_23,
    img_24,
    img_25,
    img_26,
    img_27,
    img_28,
    img_29,
    img_30
];

// click top left put minx miny
// click bottom right put maxx maxy


var eights = {
    1: [
      { minx: 15.5102, miny: 2.3469, maxx: 17.551, maxy: 5.3061 },
      { minx: 48.3673, miny: 12.2449, maxx: 53.0612, maxy: 18.8776 },
      { minx: 32.8571, miny: 30.102, maxx: 34.6939, maxy: 33.3673 },
      { minx: 0.4082, miny: 46.9388, maxx: 3.8776, maxy: 52.0408 },
      { minx: 38.2142, miny: 60.8163, maxx: 40.7653, maxy: 62.2448 },
      { minx: 90.3061, miny: 64.2857, maxx: 93.3673, maxy: 67.8571 }
    ],
    2: [
      { minx: 57.1939, miny: 3.0612, maxx: 60.9694, maxy: 8.2653},
      { minx: 46.1735, miny: 8.0612, maxx: 48.7245, maxy: 11.7347 },
      { minx: 54.4388, miny: 15.7143, maxx: 57.0918, maxy: 19.3878 },
      { minx: 72.0918, miny: 51.3265, maxx: 74.0306, maxy: 54.4898 },
      { minx: 90.1531, miny: 66.8367, maxx: 92.1939, maxy: 70.1020 },
      { minx: 88.5204, miny: 77.3469, maxx: 91.6837, maxy: 79.3878 },
      { minx: 63.4184, miny: 81.1224, maxx: 65.1531, maxy: 84.0816 },
      { minx: 7.449, miny: 62.7959, maxx: 10.2041, maxy: 67.8776 }
    ],
    3: [
      { minx: 24.0306, miny: 6.7346, maxx: 25.6632, maxy: 9.7959 },
      { minx: 46.3776, miny: 30.6122, maxx: 56.2755, maxy: 54.1837 },
      { minx: 79.8469, miny: 11.3265, maxx: 82.2959, maxy: 14.5918 },
      { minx: 87.3980, miny: 37.1429, maxx: 93.0102, maxy: 47.0408 },
      { minx: 62.6020, miny: 60.0000, maxx: 64.0306, maxy: 61.9388 },
      { minx: 2.1939, miny: 75.7143, maxx: 4.2347, maxy: 78.8776 },
      { minx: 74.9490, miny: 88.4694, maxx: 76.3776, maxy: 91.2245 },
    ],
    4: [
      { minx: 13.1122, miny: 6.5306, maxx: 15.6633, maxy: 11.1224 },
      { minx: 38.3163, miny: 16.3265, maxx: 63.6224, maxy: 61.3265 },
      { minx: 3.0102, miny: 29.8980, maxx: 5.1531, maxy: 33.6735 },
      { minx: 95.6633, miny: 81.9388, maxx: 98.2143, maxy: 86.9388 },
      { minx: 70.9694, miny: 49.6939, maxx: 73.3163, maxy: 53.5714 },
    ],
    5: [
      { minx: 37.7041, miny: 11.7347, maxx: 39.7449, maxy: 16.0204 },
      { minx: 34.0306, miny: 25.3061, maxx: 35.8673, maxy: 29.2857 },
      { minx: 76.1735, miny: 25.1020, maxx: 78.4184, maxy: 29.1837 },
      { minx: 52.7041, miny: 16.5306, maxx: 54.6429, maxy: 19.7959 },
      { minx: 33.3163, miny: 37.4490, maxx: 35.2551, maxy: 41.3265 },
      { minx: 52.5000, miny: 37.6531, maxx: 54.5408, maxy: 41.4286 },
      { minx: 56.9898, miny: 50.3061, maxx: 59.3367, maxy: 54.8980 },
      { minx: 69.1327, miny: 49.2857, maxx: 71.0714, maxy: 52.1429 },
      { minx: 46.6837, miny: 66.8367, maxx: 48.5204, maxy: 69.3878 },
      { minx: 47.9082, miny: 87.9592, maxx: 55.2551, maxy: 92.0408 },
    ],
    6: [ ///////////////////////////////////////////////
      { minx: 0.8673, miny: 2.4490, maxx: 2.9082, maxy: 5.8163 },
      { minx: 26.6837, miny: 75.3061, maxx: 29.4388, maxy: 79.0816 },
      { minx: 33.4184, miny: 75.6122, maxx: 49.3367, maxy: 91.5306 },
      { minx: 76.8878, miny: 63.3673, maxx: 81.1735, maxy: 72.1429 },
      { minx: 70.9694, miny: 78.2653, maxx: 74.1327, maxy: 83.1633 },
      { minx: 89.9490, miny: 42.5510, maxx: 92.6020, maxy: 46.6327 },
      { minx: 41.8878, miny: 55.4082, maxx: 43.9286, maxy: 58.8776 }
    ],
    7: [
      { minx: 81.6837, miny: 14.5918, maxx: 85.7653, maxy: 20.6122 },
      { minx: 1.2755, miny: 61.4286, maxx: 5.0510, maxy: 68.1633 },
      { minx: 62.2959, miny: 66.5306, maxx: 63.8265, maxy: 69.5918 },
    ],
    8: [
      { minx: 46.6837, miny: 5.9184, maxx: 55.5612, maxy: 20.8163 },
      { minx: 34.5408, miny: 46.8367, maxx: 42.2959, maxy: 54.5918 },
      { minx: 68.4184, miny: 45.9184, maxx: 71.7857, maxy: 52.5510 },
      { minx: 36.7857, miny: 84.4898, maxx: 40.3571, maxy: 90.3061 },
    ],
    9: [
      { minx: 11.2755, miny: 7.5510, maxx: 14.3367, maxy: 12.9592 },
      { minx: 2.9082, miny: 50.3061, maxx: 5.8673, maxy: 55.4082 },
      { minx: 22.5000, miny: 57.7551, maxx: 28.4184, maxy: 66.4286 },
      { minx: 43.7245, miny: 48.4694, maxx: 61.0714, maxy: 58.6735 },
      { minx: 69.8469, miny: 58.4694, maxx: 75.1531, maxy: 67.4490 },
    ],
    10: [
      { minx: 37.5000, miny: 32.5510, maxx: 39.6429, maxy: 36.4286 },
      { minx: 10.9694, miny: 47.5510, maxx: 13.3163, maxy: 52.4490 },
      { minx: 74.2347, miny: 43.2653, maxx: 81.4796, maxy: 53.1633 },
      { minx: 91.0714, miny: 52.5510, maxx: 96.1735, maxy: 62.3469 },
      { minx: 96.7857, miny: 81.7347, maxx: 99.3367, maxy: 86.1224 },
    ],
    11: [ 
      { minx: 38.9286, miny: 56.1224, maxx: 42.5000, maxy: 60.8163 } ,
      { minx: 39.8469, miny: 91.4286, maxx: 43.9286, maxy: 98.5714 } ,
      { minx: 74.0306, miny: 62.7551, maxx: 77.6020, maxy: 66.9388 } ,
      { minx: 3.0102, miny: 40.2041, maxx: 6.4796, maxy: 45.3061 } ,
    ],
    12: [
      { minx: 29.0816, miny: 21.9388, maxx: 72.9592, maxy: 77.551 },
      { minx: 45.6633, miny: 79.2857, maxx: 50.1531, maxy: 86.3265 }
    ],
    13: [
      { minx: 45.6633, miny: 21.7347, maxx: 52.1939, maxy: 31.9388 },
      { minx: 58.1122, miny: 66.4286, maxx: 59.5408, maxy: 68.9796 },
      { minx: 59.3367, miny: 66.5306, maxx: 60.9694, maxy: 68.7755 },
      { minx: 15.5612, miny: 57.5510, maxx: 18.1122, maxy: 61.5306 },
      { minx: 60.6633, miny: 71.4286, maxx: 64.0306, maxy: 73.5714 }
    ],
    14: [
      { minx: 29.5408, miny: 51.0204, maxx: 35.7653, maxy: 63.0612 },
      { minx: 37.0918, miny: 52.6531, maxx: 42.6020, maxy: 64.4898 },
      { minx: 64.6429, miny: 71.5306, maxx: 66.7857, maxy: 74.6939 },
      { minx: 20.7653, miny: 76.1224, maxx: 26.0204, maxy: 88.8367 }
    ],
    15: [
      { minx: 77.3980, miny: 34.8980, maxx: 84.5408, maxy: 48.6735 },
      { minx: 11.7347, miny: 50.551, maxx: 16.3265, maxy: 57.1633 },
      { minx: 1.4286, miny: 49.0204, maxx: 5.6122, maxy: 57.6531 },
      { minx: 37.2959, miny: 70.4082, maxx: 44.4388, maxy: 75.0000 },
      { minx: 58.2143, miny: 76.9388, maxx: 62.9082, maxy: 79.1837 }
    ],
    16: [
      { minx: 13.7755, miny: 15.3061, maxx: 16.3265, maxy: 19.898 },
      { minx: 45.8673, miny: 30.1837, maxx: 56.9898, maxy: 43.9796 },
      { minx: 52.3980, miny: 45.7143, maxx: 60.1531, maxy: 54.1837 },
      { minx: 10.7143, miny: 48.4898, maxx: 16.8367, maxy: 52.0816 },
      { minx: 43.8265, miny: 78.1633, maxx: 48.2143, maxy: 85.2041 }
    ],
    17: [
      { minx: 5.7653, miny: 12.9592, maxx: 7.9082, maxy: 16.2245 },
      { minx: 22.7041, miny: 22.0408, maxx: 25.2551, maxy: 26.5306 },
      { minx: 3.4184, miny: 36.6327, maxx: 5.5612, maxy: 40.0000 },
      { minx: 2.2959, miny: 40.2041, maxx: 9.7449, maxy: 51.3265 },
      { minx: 3.3163, miny: 52.0408, maxx: 7.8061, maxy: 59.2857 },
      { minx: 73.6224, miny: 4.2857, maxx: 87.5000, maxy: 30.5102},
      { minx: 67.2959, miny: 21.6327, maxx: 68.7245, maxy: 23.9796 },
      { minx: 57.9082, miny: 40.5102, maxx: 59.8469, maxy: 43.9796 },
      { minx: 88.8265, miny: 40.7143, maxx: 96.2755, maxy: 51.1224 },
      { minx: 90.8673, miny: 52.1429, maxx: 95.6633, maxy: 61.5306 },
      { minx: 51.8878, miny:43.3673, maxx: 54.9490, maxy: 47.3469 }
    ],
    18: [
      { minx:74.4388, miny: 23.2653, maxx: 79.2347, maxy: 31.3265 },
      { minx: 76.2755, miny: 46.6327, maxx: 83.6224, maxy: 49.7959 },
      { minx: 41.1735, miny: 29.7959, maxx: 65.4592, maxy: 68.7755 },
      { minx: 34.1327, miny: 71.5306, maxx: 37.8061, maxy: 77.3469},
      { minx: 57.8061, miny: 94.8980, maxx: 68.0102, maxy: 99.5918 }
    ],
    19: [
      { minx: 60.8673, miny: 16.2245, maxx: 62.9082, maxy: 19.3878 },
      { minx: 48.6224, miny: 35.5102, maxx: 52.0918, maxy: 40.2041 },
      { minx: 41.8878, miny: 35.1020, maxx: 44.0306, maxy: 38.2653 },
      { minx: 25.6633, miny: 53.8776, maxx: 27.9082, maxy: 57.2449 },
      { minx: 21.3776, miny: 56.7347, maxx: 24.2347, maxy: 60.4082 },
      { minx: 76.3776, miny: 50.2041, maxx: 78.9286, maxy: 53.9796 },
      { minx: 71.5816, miny: 82.4490, maxx: 74.8469, maxy: 84.8980 },
      { minx: 39.1327, miny: 50.6122, maxx: 41.2755, maxy: 53.6735 },
    ],
    20: [
      { minx: 63.5204, miny: 11.4286, maxx: 70.9694, maxy: 22.9592 },
      { minx: 64.3367, miny: 30.8163, maxx: 67.1939, maxy: 34.7959 },
      { minx: 32.9082, miny: 61.1224, maxx: 41.0714, maxy: 72.4490 },
      { minx: 56.4796, miny: 60.9184, maxx: 64.2347, maxy: 71.6327 },
      { minx:0.8673, miny: 8.3673, maxx: 3.8265, maxy: 12.1429 },
      { minx: 80.9694, miny: 91.3265, maxx: 83.5204, maxy: 94.7959 }
    ],
    21: [
      { minx: 52.0918, miny: 4.4898, maxx: 57.3980, maxy: 12.3469 },
      { minx: 32.1939, miny: 33.2653, maxx: 38.9286, maxy: 45.3061 },
      { minx: 30.7653, miny: 61.5306, maxx: 39.1327, maxy: 75.4082 },
      { minx: 41.7857, miny: 18.0612, maxx: 68.0102, maxy: 65.5102 },
      { minx: 75.3571, miny: 70.7143, maxx: 77.6020, maxy: 75.3061 },
      { minx: 91.3776, miny: 27.9592, maxx: 94.1327, maxy: 33.6327 },
      { minx: 27.8061, miny: 89.1837, maxx: 30.1531, maxy: 93.0612 }
    ],
    22: [
      { minx: 0.3571, miny: 10.5102, maxx: 8.6224, maxy: 20.6122 },
      { minx: 37.3980, miny: 13.9796, maxx: 41.6837, maxy: 18.3673 },
      { minx: 47.5000, miny: 41.5306, maxx: 52.8061, maxy: 48.9796 },
      { minx: 44.6429, miny: 35.7143, maxx: 49.9490, maxy: 40.3061 },
      { minx: 52.3980, miny: 95.7143, maxx: 57.6020, maxy: 99.3878 }
    ],
    23: [
      { minx: 96.7857, miny: 1.0204, maxx: 99.6224, maxy: 4.3878 },
      { minx: 50.9694, miny: 45.5102, maxx: 57.6020, maxy: 55.7143},
      { minx: 10.1531, miny: 76.5306, maxx: 14.0306, maxy: 82.6531 }
    ],
    24: [
      { minx: 0.9184, miny: 68.9388, maxx: 11.7347, maxy: 85.7551 },
      { minx: 4.7449, miny: 36.1224, maxx: 9.0306, maxy: 42.0408 },
      { minx: 59.0306, miny: 80.6122, maxx: 63.6224, maxy: 87.4490 },
      { minx: 55.3571, miny: 29.0816, maxx: 61.6837, maxy: 35.4082},
      { minx: 54.9490, miny: 17.5510, maxx: 63.7245, maxy: 28.2653 },
    ],
    25: [
      { minx: 39.7449, miny: 5.0000, maxx: 41.8878, maxy: 8.3673 },
      { minx: 44.8469, miny: 7.2449, maxx: 46.6837, maxy: 10.5102 },
      { minx: 30.8673, miny: 37.6531, maxx: 37.5000, maxy: 41.6327 },
      { minx: 86.9898, miny: 1.9388, maxx: 89.1327, maxy: 5.4082 },
      { minx: 87.0918, miny: 8.2653, maxx: 88.7245, maxy: 10.5102 },
      { minx: 31.0714, miny: 10.9184, maxx: 33.0102 , maxy: 14.4694 },
      { minx: 77.6020, miny: 85.3061, maxx: 80.3571, maxy: 88.6735 }
    ],
    26: [
      { minx: 7.8061, miny: 72.2449, maxx: 12.7041, maxy: 78.1633 },
      { minx: 35.8673, miny: 70.3061, maxx: 38.4184, maxy: 73.9796 },
      { minx: 90.7653, miny: 71.4286, maxx: 95.4592, maxy: 77.5510 }
    ],
    27: [
      { minx: 31.4796, miny: 2.1429, maxx: 34.3367, maxy: 6.7347 },
      { minx: 3.0102, miny: 22.7551, maxx: 4.7449, maxy: 26.3265 },
      { minx: 50.0510, miny: 65.1020, maxx: 52.1939, maxy: 69.5918 },
      { minx: 49.6429, miny: 80.0000, maxx: 51.6837, maxy: 83.4694 },
      { minx: 86.9898, miny: 82.6531, maxx: 89.0306, maxy: 86.3265 },
      { minx: 52.3980, miny: 23.0612, maxx: 55.1531, maxy: 27.4490 }
    ],
    28: [
      { minx: 39.9490, miny: 0.9184, maxx: 49.9490, maxy: 6.5306 },
      { minx: 8.6224, miny: 1.1224, maxx: 11.1735, maxy: 5.7143 },
      { minx: 7.1939, miny: 44.8980, maxx: 9.5408, maxy: 48.3673 },
      { minx: 59.8469, miny: 87.8571, maxx: 65.7653, maxy: 98.3673 },
      { minx: 96.3776, miny: 27.9592, maxx: 98.5204, maxy: 31.8367 },
      { minx: 33.9286, miny: 69.8980, maxx: 35.7653, maxy: 73.4694 },
      { minx: 35.5612, miny: 32.0408, maxx: 37.9082, maxy: 36.4286 }
    ],
    29: [
      { minx: 35.5612, miny: 13.7755, maxx: 61.7857, maxy: 53.6735 },
      { minx: 49.2347, miny: 56.4286, maxx: 50.9694, maxy: 59.4898 },
      { minx: 65.3571, miny: 50.6122, maxx: 68.4184, maxy: 54.7959 },
      { minx: 31.3776, miny: 33.6735, maxx: 34.0306, maxy: 37.3469 },
      { minx: 19.3367, miny: 27.4490, maxx: 21.9898, maxy: 31.1224 },
      { minx: 7.1939, miny: 51.0204, maxx: 9.6429, maxy: 55.6122 },
      { minx: 2.0918, miny: 17.9592, maxx: 4.5408, maxy: 21.4286 },
      { minx: 95.2551, miny: 9.8980, maxx: 98.0102, maxy: 14.1837 },
    ],
    30: [
      { minx: 57.6020, miny: 4.1837, maxx: 62.0918, maxy: 10.6122 },
      { minx: 30.6122, miny: 11.7347, maxx: 74.4898, maxy: 87.2449 },
      { minx: 19.898, miny: 3.0612, maxx: 25, maxy: 10.7143 }
    ]
  };

var stats = {
    1: { errors:0, founds:0, tbf: 6},
    2: { errors:0, founds:0, tbf: 8},
    3: { errors:0, founds:0, tbf: 7},
    4: { errors:0, founds:0, tbf: 5},
    5: { errors:0, founds:0, tbf: 10},
    6: { errors:0, founds:0, tbf: 3},
    7: { errors:0, founds:0, tbf: 3},
    8: { errors:0, founds:0, tbf: 4},
    9: { errors:0, founds:0, tbf: 5},
    10: { errors:0, founds:0, tbf: 5},
    11: { errors:0, founds:0, tbf: 5},
    12: { errors:0, founds:0, tbf: 2},
    13: { errors:0, founds:0, tbf: 4},
    14: { errors:0, founds:0, tbf: 5},
    15: { errors:0, founds:0, tbf: 5},
    16: { errors:0, founds:0, tbf: 5},
    17: { errors:0, founds:0, tbf: 3},
    18: { errors:0, founds:0, tbf: 7},
    19: { errors:0, founds:0, tbf: 7},
    20: { errors:0, founds:0, tbf: 6},
    21: { errors:0, founds:0, tbf: 2},
    22: { errors:0, founds:0, tbf: 4},
    23: { errors:0, founds:0, tbf: 4},
    24: { errors:0, founds:0, tbf: 3},
    25: { errors:0, founds:0, tbf: 8},
    26: { errors:0, founds:0, tbf: 6},
    27: { errors:0, founds:0, tbf: 7},
    28: { errors:0, founds:0, tbf: 7},
    29: { errors:0, founds:0, tbf: 8},
    30: { errors:0, founds:0, tbf: 3},
};


// const images = [
//     img_1, img_2
// ];



// testting
// every 20 sec, change image

const ComponentPage = ( ) => {

    const searchParams =  useSearchParams() 
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);
    const router = useRouter()
    // eights[currentIndex+1].map((e)=> (console.log(e)))
    //eights[currentIndex].map((zone, index) => (console.log(zone,index)))

/*    useEffect(() => {
      const image = imageRef.current;
      const imageWidth = image.width;
      const imageHeight = image.height;
  
      eights[currentIndex+1].forEach(zone => {
        const zoneElement = document.createElement('div');
        zoneElement.style.position = 'absolute';
        zoneElement.style.left = `${(zone.minx / 100) * imageWidth}px`;
        zoneElement.style.top = `${(zone.miny / 100) * imageHeight}px`;
        zoneElement.style.width = `${((zone.maxx - zone.minx) / 100) * imageWidth}px`;
        zoneElement.style.height = `${((zone.maxy - zone.miny) / 100) * imageHeight}px`;
        zoneElement.style.border = '2px solid red';
        zoneElement.style.pointerEvents = 'none';
        image.parentElement.appendChild(zoneElement);
      });
  
      return () => {
        eights[currentIndex+1].forEach(() => {
          image.parentElement.removeChild(image.parentElement.lastChild);
        });
      };
    }, [currentIndex]); */







// verify if cursor is clicking an eight
    const isInTheEight = (x, y, image) => {
        return eights[image + 1].some(element => {
            if (element.minx < x && x < element.maxx && element.miny < y && y < element.maxy) {
                //console.log("true", x, y, element.minx, element.maxx, element.miny, element.maxy);
                return true;
            } else {
                //console.log("false", x, y, element.minx, element.maxx, element.miny, element.maxy);
                return false;
            }
        });
    };
    

//when clicking
    const handleClick = (event) => {
        const imageRect = imageRef.current.getBoundingClientRect();
        const x = ((event.clientX - imageRect.left) / imageRect.width * 100).toFixed(4);
        const y = ((event.clientY - imageRect.top) / imageRect.height * 100).toFixed(4);
    
        //console.log(`Clicked at position (x:${x}, y:${y}) relative to the image.`);


        if(isInTheEight(x,y,currentIndex)){
            stats[currentIndex+1].founds += 1
            // console.log("in");
        } else {
            stats[currentIndex+1].errors += 1
            // console.log(x,y);
        }
    }
    

    useEffect(() => {
      //console.log("id",currentIndex);
        const intervalId = setInterval(async () => {
            if(currentIndex === images.length - 1) {
                clearInterval(intervalId)
                
                


                for (var key in stats) {
                    if (stats.hasOwnProperty(key)) {
                        // Check if errors > 0
                        if (stats[key].founds >= stats[key].tbf) {

                            stats[key].score = 1;

                        }  else {
                            stats[key].score = 0
                        }
                    }
                }


                const docRef = doc(db, "data", searchParams.get("pseudo"));
                
                setDoc(docRef, {stats: stats})
                  .then(() => {
                    console.log("Document successfully written!");

                  })
                  .catch((error) => {
                    
                    console.error("Error writing document: ", error );
                  });
                router.push("/")
            } 
            else {
                setCurrentIndex(currentIndex + 1);
                
                
            }
        }, 20000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
      
          //   <div className=" flex flex-col items-center justify-between "> 
          //     <Image ref={imageRef} src={images[currentIndex]} alt='ImageTestAttention' className=' h-screen w-[100vh]' onClick={handleClick}></Image>
          //     <div className=' h-screen w-[100vh] bg-teal-800/25'>
          //       <p>z</p>
          //         {eights[currentIndex+1].map((zone, index) => (
          //           <div
          //           key={index}
          //           style={{
          //             position: 'absolute',
          //             left: `${(zone.minx / 100) * 100}%`,
          //             top: `${(zone.miny / 100) * 100}%`,
          //             width: `${(zone.maxx - zone.minx) / 100 * 100}%`,
          //             height: `${(zone.maxy - zone.miny) / 100 * 100}%`,
          //             border: '2px solid red',
          //             boxSizing: 'border-box'
          //           }}
          //         ></div>
          //       ))}  
          //     </div>
            
          // </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ position: 'relative', maxWidth: '100%' }}>
              <Image ref={imageRef} src={images[currentIndex]} alt='ImageTestAttention' className=' h-screen w-[100vh]' onClick={handleClick}></Image>
            </div>
          </div>
      
      ) 

    
}



const page = () => {
  
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentPage></ComponentPage>
      </Suspense>
    
    )
};

export default page
