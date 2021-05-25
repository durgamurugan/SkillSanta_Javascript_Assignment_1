
vowels= String(prompt("Enter the sentence:"));

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write("a=" + char_count(vowels, 'a') + "<br>");
document.write("e=" + char_count(vowels, 'e') + "<br>");
document.write("i=" + char_count(vowels, 'i') + "<br>");
document.write("o=" + char_count(vowels, 'o') + "<br>");
document.write("u=" + char_count(vowels, 'u') + "<br>");