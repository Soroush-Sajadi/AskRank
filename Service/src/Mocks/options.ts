export const options: any = {  
  gb: [
    { name: 'Fertility rate', linkedOptions: [{name: 'Country'}] }, 
    { name: 'Median age', linkedOptions:[{name: 'City'}, {name: 'Country'}]},
    { name: 'Polulation', linkedOptions: [{name: 'City'}, {name: 'Country'}] },
  ],
  es: [
    {name: 'Edad mediana', linkedOptions: [{name: 'Ciudad'}, {name: 'País'}]},
    {name: 'Población', linkedOptions: [{name: 'Ciudad'}, {name: 'País'}]}, 
    {name: 'Tasa de fecundidad', linkedOptions: [{name: 'Ciudad'}, {name: 'País'}]}, 
  ],
  fr: [
    {name: 'Âge médian',  linkedOptions: [{name: 'Pays'}, {name: 'Ville'}]},
    {name: 'Population', linkedOptions: [{name: 'Pays'}, {name: 'Ville'}]}, 
    {name: 'Taux de fécondité', linkedOptions: [{name: 'Pays'}]}, 
  ],
  de: [
    {name: 'Bevölkerung', linkedOptions: [{name: 'Land'}, {name: 'Stadt'}]}, 
    {name: 'Fertilitätsrate', linkedOptions: [{name: 'Land'}]}, 
    {name: 'Durchschnittsalter', linkedOptions: [{name: 'Land'}, {name: 'Stadt'}]}
  ],
  tr: [
    {name: 'Nüfus', linkedOptions: [{name: 'Şehir'}, {name: 'Ülke'}]}, 
    {name: 'Doğurganlik orani', linkedOptions: [{name: 'Ülke'}]}, 
    {name: 'Medyan yaş', linkedOptions: [{name: 'Şehir'}, {name: 'Ülke'}]}
  ]
} 