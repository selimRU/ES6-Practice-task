const data = {
    sophia:{
        id: 33,
        study: [
            {
                primary: [
                    {
                        scool_name: 'abc primary school'
                    },
                    {
                        location: 'peters burg'
                    }
                ]
            },
            {
                secondary: [
                    {
                        scool_name: 'abc secondary school'
                    },
                    {
                        location: 'newyork'
                    }
                ]
            }
        ]
    }
}
console.log(data.sophia.study[1].secondary[1].location);

