describe('Exibição da mensagem de boas-vindas', function(){
  beforeEach(function(){
    setFixtures('<div id="mensagem" />');
  });

  it("Deve exibir 'Bom-dia!' entre 5:00 e 11:59", function(){
    boasvindas('05:00');
    expect($('#mensagem').text()).toEqual('Bom-dia!');
  });

  it("Deve exibir 'Boa-tarde!' entre 12:00 e 17:59", function(){
    boasvindas('12:00');
    expect($('#mensagem').text()).toEqual('Boa-tarde!');
  });

  it("Deve exibir 'Boa-noite!' entre 18:00 e 23:59", function(){
    boasvindas('18:00');
    expect($('#mensagem').text()).toEqual('Boa-noite!');
  });

  it("Deve exibir 'Dormir é para os fracos!' de 00:00 a 04:59", function(){
    boasvindas('00:00');
    expect($('#mensagem').text()).toEqual('Dormir é para os fracos!');
  });

  it("Deve exibir, por padrão, a mensagem de acordo com a hora do cliente", function(){
    var data = new Date;
    data.setTime(data.getTime()); 
    var hora = data.getHours();
    boasvindas();
    if(hora >= 5 && hora < 12)
      expect($('#mensagem').text()).toEqual('Bom-dia!');
    else if(hora >= 12 && hora < 18)
      expect($('#mensagem').text()).toEqual('Boa-tarde!');
    else if(hora >= 18 && hora <= 23)
      expect($('#mensagem').text()).toEqual('Boa-noite!');
    else
      expect($('#mensagem').text()).toEqual('Dormir é para os fracos!');
  });
});
