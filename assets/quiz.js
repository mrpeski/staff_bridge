// Usage: <div class="quiz"><p>Question</p><button data-correct>..</button><button>..</button><div class="why">..</div></div>
// Optional: <p class="claim" id="score"></p> shows "n of m correct" as answers come in.
const quizzes=[...document.querySelectorAll('.quiz')];
let right=0,answered=0;
const score=document.getElementById('score');
quizzes.forEach(q=>{
  q.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    if(q.classList.contains('done'))return;
    q.classList.add('done');
    q.querySelectorAll('button').forEach(x=>{x.disabled=true;if(x.hasAttribute('data-correct'))x.classList.add('ok')});
    answered++;
    if(b.hasAttribute('data-correct'))right++;else b.classList.add('bad');
    if(score)score.textContent=`${right} of ${quizzes.length} correct (${answered} answered). Note the ones you missed and tell your teacher.`;
  }));
});
