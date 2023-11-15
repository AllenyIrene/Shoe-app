
import men1 from "../Assets/Men/m1.jpeg"
import women from "../Assets/Women/w5.jpeg"
import kids from "../Assets/Kids/k1.jpeg"

import {BsTruck} from "react-icons/bs"
import {MdLocalAtm} from "react-icons/md"
import {FcMoneyTransfer} from "react-icons/fc"
import {FcOnlineSupport} from "react-icons/fc"

// MENS PICS
import m1 from "../Assets/Men/p1.jpeg"
import m2 from "../Assets/Men/p2.jpeg"
import m3 from "../Assets/Men/p3.jpeg"
import m4 from "../Assets/Men/p4.jpeg"
import m5 from "../Assets/Men/p5.jpeg"
import m6 from "../Assets/Men/p6.jpeg"
import m7 from "../Assets/Men/p7.jpeg"
import m8 from "../Assets/Men/p8.jpeg"
import m9 from "../Assets/Men/p9.jpeg"
import m10 from "../Assets/Men/p10.jpeg"

//WOMEN'S PICS
import w1 from "../Assets/Women/p1.jpeg"
import w2 from "../Assets/Women/p2.jpeg"
import w3 from "../Assets/Women/p3.jpeg"
import w4 from "../Assets/Women/p4.jpeg"
import w5 from "../Assets/Women/p5.jpeg"
import w6 from "../Assets/Women/p6.jpeg"
import w7 from "../Assets/Women/p7.jpeg"
import w8 from "../Assets/Women/p8.jpeg"
import w9 from "../Assets/Women/p9.jpeg"
import w10 from "../Assets/Women/p10.jpeg"

//KIDS PICS
import k1 from "../Assets/Kids/p1.jpeg"
import k2 from "../Assets/Kids/p2.jpeg"
import k3 from "../Assets/Kids/p3.jpeg"
import k4 from "../Assets/Kids/p4.jpeg"
import k5 from "../Assets/Kids/p5.jpeg"
import k6 from "../Assets/Kids/p6.jpeg"
import k7 from "../Assets/Kids/p7.jpeg"
import k8 from "../Assets/Kids/p8.jpeg"
import k9 from "../Assets/Kids/p9.jpeg"
import k10 from "../Assets/Kids/p10.jpeg"



export const navLinksA = [
    {label:"home", name:"Home"},
    {label:"men", name:"Men"},
    {label:"women", name:"Women"},
    {label:"baby", name:"Baby"},
    {label:"blog", name:"Blog"},
    {label:"contacts", name:"Contacts"}
]

export const cartitems = [
    {label:"Menswear", name:men1 ,links:"men"},
    {label:"Womenswear", name:women, links:"women"},
    {label:"Kidswear", name:kids, links:"baby"},
]

export const delivery = [
    {label:"FAST & FREE DELIVERY", image:<BsTruck size="2rem"/>, name:"Free delivery on all orders" },
    {label:"SECURE PAYMENT", image:<MdLocalAtm size="2rem"/> , name:"Pay via any means"},
    {label:"MONEY BACK GUARANTEE", image: <FcMoneyTransfer size="2rem"/>, name:"Return policy up to 7 days" },
    {label:"ONLINE SUPPORT", image: <FcOnlineSupport size="2rem"/>, name:"Ready to serve you at anytime" },
]

export const homeBanner = [
    {label:"Men's Fashion", name:m2 ,links:"men"},
    {label:"Women's Fashion", name:w2, links:"women"},
    {label:"Kid's Fashjion", name:k1, links:"baby"},
   
]