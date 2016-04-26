/*AMenu aberto no desktop e fechado no mobile*/

$(document).ready(function(){
  if(window.screen.width< 1025){ $('#collapse1').removeClass('in'); }
});