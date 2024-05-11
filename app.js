
      function Solve(val) {
         var v = document.getElementById('nanlir');
         v.value += val;
      }
      function Result() {
         var num1 = document.getElementById('nanlir').value;
         var num2 = eval(num1);
         document.getElementById('nanlir').value = num2;
      }
      function Clear() {
         var inp = document.getElementById('nanlir');
         inp.value = '';
      }
      function Back() {
         var ev = document.getElementById('nanlir');
         ev.value = ev.value.slice(0,-1);
      }
   