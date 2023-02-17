
export const options: any = {  
  gb: [
    { name: 'Capital Cities',
      val: 'capitalCities',
      linkedOptions: [
        {title: 'Fertility rate', val:'fertilityRate'}, 
        {title: 'Median age', val:'medianAge'}, 
        {title: 'Polulation', val: 'population'}
      ] 
    }, 
    { name: 'Country',
      val: 'countries',
      linkedOptions: [
          {title: 'Fertility rate', val:'fertilityRate'}, 
          {title: 'Median age', val:'medianAge'}, 
          {title: 'Polulation', val: 'population'}
        ]
    },
  ],
  es: [
    { name: 'Ciudades Capitales',
      val: 'capitalCities',
      linkedOptions: [
        {title: 'Edad mediana', val:'medianAge'}, 
        {title: 'Población', val: 'population'}, 
        {title: 'Tasa de fecundidad', val:'fertilityRate'}
      ]
    },
    { name: 'País',
      val: 'countries',
      linkedOptions: [
        {title: 'Edad mediana', val:'medianAge'}, 
        {title: 'Población', val: 'population'}, 
        {title: 'Tasa de fecundidad', val:'fertilityRate'}
      ]
    }, 
  ],
  fr: [
    { name: 'Pays',
      val: 'countries',
      linkedOptions: [
        {title: 'Âge médian', val:'medianAge'}, 
        {title: 'Population',  val: 'population'}, 
        {title: 'Taux de fécondité', val:'fertilityRate'}
      ]
    },
    { name: 'capitales',
      val: 'capitalCities',
      linkedOptions: [
        {title: 'Âge médian', val:'medianAge'}, 
        {title: 'Population',  val: 'population'}, 
        {title: 'Taux de fécondité', val:'fertilityRate'}
      ]
    }, 
  ],
  de: [
    { name: 'Hauptstädte', 
      val: 'capitalCities',
      linkedOptions: [
        {title: 'Bevölkerung', val: 'population'}, 
        {title: 'Fertilitätsrate', val:'fertilityRate'}, 
        {title: 'Durchschnittsalter', val:'medianAge'}      
      ]
    }, 
    { name: 'Land',
      val: 'countries',
      linkedOptions: [
        {title: 'Bevölkerung', val: 'population'}, 
        {title: 'Fertilitätsrate', val:'fertilityRate'}, 
        {title: 'Durchschnittsalter', val:'medianAge'}
      ]
    }, 
  ],
  tr: [
    { name: 'Başkentler',
      val: 'capitalCities',
      linkedOptions: [
        {title: 'Doğurganlik orani', val:'fertilityRate'}, 
        {title: 'Medyan yaş', val:'medianAge'}, 
        {title: 'Nüfus',  val: 'population'}
      ]
    }, 
    { name: 'Ülke',
      val: 'countries',
      linkedOptions: [
        {title: 'Doğurganlik orani', val:'fertilityRate'},
        {title: 'Medyan yaş', val:'medianAge'},
        {title: 'Nüfus',  val: 'population'}
      ]
    }, 
  ]
} 