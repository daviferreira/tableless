<textarea rows="30" cols="100">
<?php
$nomes = array(
'Masuki Oki',
'Hanazom Senshik',
'Renoyok Suko',
'Aka Akume',
'Chobo Shizue',
'Mino Ume-hiz',
'Tsukawa Seno',
'Sae Teiko',
'Senshi Towiko',
'Wakozak Chobo',
'Masagam Jun',
'Cho Yukinoe',
'Takogo Kibu',
'Akawa Yame',
'Sako Nazome'
);

$cidades = array(
'Tokyo',
'Yokohama',
'Osaka',
'Nagoya',
'Sapporo',
'Kobe',
'Kyoto',
'Fukuoka',
'Kawasaki',
'Saitama',
'Hiroshima',
'Sendai',
'Kitakyushu',
'Saitama',
'Hiroshima',
'Sendai',
);

$count = 1;
foreach($nomes as $k => $v){
  $data_nascimento = rand(1,31) . '/' . rand(1,12) . '/' . rand(1930,1980);
  echo "
<tr>
  <td>{$count}</td>
  <td>{$v}</td>
  <td>{$data_nascimento}</td>
  <td>{$cidades[$k]}</td>
  <td>
    <a href=\"#\"><img src=\"editar.png\" width=\"16\" height=\"16\" /></a>
    <a href=\"#\"><img src=\"excluir.png\" width=\"16\" height=\"16\" /></a>
  </td>
</tr>";
  $count++;
}
?>
</textarea>