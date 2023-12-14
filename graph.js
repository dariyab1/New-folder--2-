let year = [];
        let temp =[];
        async function getData(){
            const response = await
            fetch("data.csv");
            const data = await response.text();
            const rows=data.split("\n").slice(1);
            
            rows.forEach((elem) => {
                const row = elem.split(",");
                year.push(row[0]);
                temp.push(row[1]);
            })
            console.log(year);
            console.log(temp);

       
        }
        

        async function graphData(){
            await getData();
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'line',
                data: {
                labels: year,
                datasets: [{
                    label: "Global Average Temperature",
                    data: temp,
                    backgroundColor: "#55A5FF",
                    borderColor: "#FA49FF",
                    borderWidth: 2
                    
                }]
                },
                options: {
                    scales: {
                        y: {
                        beginAtZero: true,
                        title: {
                            font:{
                                size: 24,
                                weight:'bold'
                                
                            },
                            display: true,
                            text: "Temperatures"
                        }
                        },
                        x: {
                            beginAtZero: true,
                            title: {
                                font:{
                                    size: 24,
                                    weight:'bold'
                                    
                                },
                                display: true,
                                text: "Years"
                            }
                            }
                        }
                    }
                    });
                }
          

        graphData();