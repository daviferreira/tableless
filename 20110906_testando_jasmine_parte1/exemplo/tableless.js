function boasvindas(hora_atual){
  var hora;
  if(typeof hora_atual == 'undefined'){
    var data = new Date;
    data.setTime(data.getTime()); 
    hora = data.getHours();
  }else{
    hora = hora_atual.split(':');
    hora = parseInt(hora[0]);
  }

  if(hora >= 5 && hora < 12)
    $('#mensagem').text('Bom-dia!');
  else if(hora >= 12 && hora < 18)
    $('#mensagem').text('Boa-tarde!');
  else if(hora >= 18 && hora <= 23)
    $('#mensagem').text('Boa-noite!');
  else
    $('#mensagem').text('Dormir é para os fracos!');
}
