// 1-masala sonning juft yoki toq son ekanligini aniqlovchi dastur yozing
//===============================================
// 2-masala foydalanuvchidan 3-xonalik son oling ular ichida eng kattasi qaysi honada ekanligi aniqlovchi dastur yozing va consolega chiqaring
//===============================================
//3-maslaa sonning ishorasini aniqlovchi dastur yozing bunda console.log musbat manfiy yoki nol degan stringlar qaytarsin
//===============================================

//4-masala   3-xonalik son kiritilsa uni sozlarda ifodalovchi dastur yozing
//===============================================

// 5-masala kabisa yilini aniqlovchi dastur yozing
// Foydalanuvchi biror yilni (masalan: 2024, 2025, 2100) kiritadi. Dastur ushbu yil kabisa yoki oddiy yil ekanligini aniqlashi va natijani ekranga chiqarishi kerak.Mantiqiy yechim (Algoritm):Yilni $N$ deb olsak, u quyidagi mantiqiy zanjirdan o'tishi kerak:Agar $N$ soni 400 ga qoldiqsiz bo'linsa $\rightarrow$ bu Kabisa.Agar 400 ga bo'linmasa, lekin 100 ga qoldiqsiz bo'linsa $\rightarrow$ bu Oddiy yil (chunki 100 ga bo'linib, 400 ga bo'linmaydigan yillar, masalan 1900 yoki 2100, kabisa emas).Agar yuqoridagilarning hech biri bo'lmasa, lekin 4 ga qoldiqsiz bo'linsa $\rightarrow$ bu Kabisa.Qolgan barcha holatlarda $\rightarrow$ Oddiy yil.
//===============================================
// 6-masala  foydalanuvchi 2ta son kiritadi ulardan eng kichigini qaytaruvchi dastur yozing bunda Math dan foydalanmang  budna || && operatorlaridan foydalaning

//===============================================

// 7-savol let const var kalit sozlarini bir birdan farqini yozib qoldiring

//===============================================

//

//================zzzz========================zzz=

// 1-masala sonning juft yoki toq son ekanligini aniqlovchi dastur yozing

// let son = +prompt("son kiriting");

// if (son % 2 === 0) {
//   console.log(son + " - juft son");
// } else {
//   console.log(son + " - toq son");
// }
//=======================================================================
// 2-masala foydalanuvchidan 3-xonalik son oling ular ichida eng kattasi qaysi honada ekanligi aniqlovchi dastur yozing va consolega chiqaring

// let son = +prompt("uch xonalik son kriting");

// let yuzlar = Math.floor(son / 100);
// let onlar = Math.floor((son % 100) / 10);
// let birlar = son % 10;

// if (yuzlar >= onlar && yuzlar >= birlar) {
//   console.log("Eng katta raqam yuzlar xonasida: " + yuzlar);
// } else if (onlar >= yuzlar && onlar >= birlar) {
//   console.log("Eng katta raqam o'nlar xonasida: " + onlar);
// } else {
//   console.log("Eng katta raqam birlar xonasida: " + birlar);
// }
//===========zz===========================================================
//3-maslaa sonning ishorasini aniqlovchi dastur yozing bunda console.log musbat manfiy yoki nol degan stringlar qaytarsin

// let son = +prompt("Son kiriting");

// if (son > 0) {
//   console.log("Musbat son");
// } else if (son < 0) {
//   console.log("Manfiy son");
// } else {
//   console.log("Son nolga teng");

// }

//===================================================================
//4-masala   3-xonalik son kiritilsa uni sozlarda ifodalovchi dastur yozing

// let son = +prompt("Uch xonali son kiriting");

// let yuzlik = Math.floor(son / 100);
// let onlik = Math.floor((son % 100) / 10);
// let birlik = son % 10;

// let str = "";

// switch (yuzlik) {
//   case 1:
//     str += "bir yuz ";
//     break;
//   case 2:
//     str += "ikki yuz ";
//     break;
//   case 3:
//     str += "uch yuz ";
//     break;
//   case 4:
//     str += "tort yuz ";
//     break;
//   case 5:
//     str += "besh yuz ";
//     break;
//   case 6:
//     str += "olti yuz ";
//     break;
//   case 7:
//     str += "yetti yuz ";
//     break;
//   case 8:
//     str += "sakkiz yuz ";
//     break;
//   case 9:
//     str += "toqqiz yuz ";
//     break;
// }

// switch (onlik) {
//   case 1:
//     str += "on ";
//     break;
//   case 2:
//     str += "yigirma ";
//     break;
//   case 3:
//     str += "ottiz ";
//     break;
//   case 4:
//     str += "qirq ";
//     break;
//   case 5:
//     str += "ellik ";
//     break;
//   case 6:
//     str += "oltmish ";
//     break;
//   case 7:
//     str += "yetmish ";
//     break;
//   case 8:
//     str += "sakson ";
//     break;
//   case 9:
//     str += "toqson ";
//     break;
// }

// switch (birlik) {
//   case 1:
//     str += "bir";
//     break;
//   case 2:
//     str += "ikki";
//     break;
//   case 3:
//     str += "uch";
//     break;
//   case 4:
//     str += "tort";
//     break;
//   case 5:
//     str += "besh";
//     break;
//   case 6:
//     str += "olti";
//     break;
//   case 7:
//     str += "yetti";
//     break;
//   case 8:
//     str += "sakkiz";
//     break;
//   case 9:
//     str += "toqqiz";
//     break;
// }

// console.log(str);
//===============================================
// 5-masala kabisa yilini aniqlovchi dastur yozing
// let yil = +prompt("yilingizni kiritng");
// if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//   console.log(yil + " - Kabisa yili");
// } else {
//   console.log(yil + " - Oddiy yil");
// }
///===================================================
// 6-masala  foydalanuvchi 2ta son kiritadi ulardan eng kichigini qaytaruvchi dastur yozing bunda Math dan foydalanmang  budna || && operatorlaridan foydalaning

// let son1 = +prompt(" 1-chi son kiritng");
// let son2 = +prompt(" 2-chi son kiritng");

// let kichik = son1;

// if (son2 < son1) {
//   kichik = son2;
// }

// console.log("Natija:", kichik);
