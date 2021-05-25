function check_numbers(x, y) 
  {
  if ((x > 50 && y < 100))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
document.write(check_numbers(55, 97)+"<br>");
document.write(check_numbers(84, 74)+"<br>");
document.write(check_numbers(50, 99)+"<br>");