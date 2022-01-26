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

const months = [
    'Jan',
    'Febr',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

function format(num){
    return `$${num} Billion`
}

export const tableRows = months.map((month, i) =>({
    month,
    phones: format(chartData[0].data[i]),
    services: format(chartData[1].data[i]),
    laptops: format(chartData[2].data[i]),
    tablets: format(chartData[3].data[i]),
})
)


export const tableColums = [
    {
        width: 240,
        label: 'Month',
        dataKey: 'month'
    },
    {
        width: 240,
        label: 'Phones',
        dataKey: 'phones',
        numeric: true
    },
    {
        width: 240,
        label: 'Services',
        dataKey: 'services',
        numeric: true
    },
    {
        width: 240,
        label: 'Laptops',
        dataKey: 'laptops',
        numeric: true
    },
    {
        width: 240,
        label: 'Tablets',
        dataKey: 'tablets',
        numeric: true
    }

]
