// Copyright (c) [2023] [igamingdev1]
// This software is licensed under the MIT License. See LICENSE.txt for details.

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyjIKONU8Ts43F4wImWobKsgwoDWBNHU8",
    authDomain: "ball-drop-64b68.firebaseapp.com",
    projectId: "ball-drop-64b68",
    storageBucket: "ball-drop-64b68.firebasestorage.app",
    messagingSenderId: "567496778023",
    appId: "1:567496778023:web:b7cc243515198ab1c3c902",
    measurementId: "G-F0VD89ZV60"
  };

initializeApp(firebaseConfig)

// init services
export const db = getFirestore()
export const auth = getAuth()
