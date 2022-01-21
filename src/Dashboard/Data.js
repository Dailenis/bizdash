function generateDate(count, start, growth=0){
    //create empty array
    const data = [];
    //loop over the count
   for (let i=0; i < count ; i++) {
       //push randon number onto the array
      data.push(Math.floor(start + ((Math.random() * i) * growth)))
   }   
    //return the array
    return data;
}

export const chartData = [
    {
        name: 'Phones',
        data: generateDate(12, 30, 5),
        color: '#2d6a4f'

    }, {
        name: 'Services',
        data:generateDate(12, 10, 0.2),
        color: '#40916c'

    }, {
        name: 'Laptops',
        data: generateDate(12, 6, 0.3),
        color: '#52b788'
    },
    {
        name: 'Tablets',
        data: generateDate(12, 5, 0.),
        color: '#74c69d'
    }
]

