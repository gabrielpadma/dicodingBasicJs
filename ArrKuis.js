/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// Tulis kode di bawah ini

const evenArr = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evenArr.push(i);
  }
}

console.log(evenArr);
