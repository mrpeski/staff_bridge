// Usage: <table class="rice"><tr data-rice><td>Name</td><td><input data-f="r" value="800"></td>... data-f = r,i,c,e; c is a percent</tr></table>
document.querySelectorAll('table.rice').forEach(t=>{
  const rows=[...t.querySelectorAll('tr[data-rice]')];
  const calc=()=>{
    const s=rows.map(r=>{const v=k=>parseFloat(r.querySelector(`[data-f=${k}]`).value)||0;
      return (v('r')*v('i')*(v('c')/100))/(v('e')||1)});
    const order=[...s].sort((a,b)=>b-a);
    rows.forEach((r,i)=>{r.querySelector('.score').textContent=Math.round(s[i]);r.querySelector('.rank').textContent='#'+(order.indexOf(s[i])+1)});
  };
  t.addEventListener('input',calc);calc();
});
