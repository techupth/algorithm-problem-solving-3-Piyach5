function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length; i++) {
    for (let j = i + 1; j < customers.length; j++) {
      if (customers[i] > customers[j]) {
        [customers[i], customers[j]] = [customers[j], customers[i]];
      }
    }
  }
  return customers;
}

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];

console.log(sortCustomerName(customers));

// ตอบคำถามตรงนี้จ้า
/* ฟังค์ชั่นข้างต้นจะมี Big O เท่ากับ n ยกกำลัง 2 เนื่องจากมีการเทียบค่า
แต่ละตัวด้วยรอบตามขนาดของ array ทำให้การทำงานเพิ่มขึ้นเป็นสองเท่า */
