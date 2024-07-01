const number = 990000;

console.log(	
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
    number,
  ),
);