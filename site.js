document.body.classList.remove('nojs');
(function(){
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.rv,.gal figure');
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
  else{
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(function(e){io.observe(e)});
  }
  var hint=document.getElementById('hint'),def=hint.textContent;
  document.querySelectorAll('.col li').forEach(function(li){
    var on=function(){hint.textContent=li.getAttribute('data-d')},off=function(){hint.textContent=def};
    li.addEventListener('mouseenter',on);li.addEventListener('focus',on);li.addEventListener('mouseleave',off);li.addEventListener('blur',off);
  });
  var r=document.getElementById('lamp'),img=document.getElementById('hall'),out=document.getElementById('lampv');
  function lamp(){var v=+r.value/100;img.parentNode.style.setProperty('--b',(.25+v*.95).toFixed(2));img.style.setProperty('--b',(.25+v*.95).toFixed(2));img.style.setProperty('--s',(.75-v*.7).toFixed(2));out.textContent=v<.15?'почти темно':v<.55?'как на занятии':v<.85?'вечер, свет включён':'как днём';}
  r.addEventListener('input',lamp);lamp();
})();
