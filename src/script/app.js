var app = new Vue({
    el: '#app',
    data: {
        Title:
        {
            name: 'Введите ФИО',
            colBaggage: 'Введите кол. багажа',
            weightBaggage: 'Введите общий вес багажа',
        },
        Message:[],
        name:"",
        weightBaggage:0,
        colBaggage:0,
        BarMenu:
        {
            visible: false,
            isActive: false,
        },
        BarMenu:
        {
            visible: false,
            isActive: false,
        },
        visibleMine: true,
        vizualMas:[],
        mas:[],
        MasivData:[],
        Error:'',
        isActive: true,
        visible: false,
    },
    methods: {
        save()
        {
            if(this.name === '')
            {
                this.Error = 'Пожалуйста, заполните поле'
            }
            else 
                if (this.weightBaggage < 30)
                {
                    this.Error = 'Меньше 30'
                }
                else
                {
                    this.visible = true;
                    this.MasivData.push({name:this.name,weightBaggage:this.weightBaggage,colBaggage:this.colBaggage});
                };
            console.log(this.MasivData);
        },
        main: function(event)
        {
            [this.isActive, this.BarMenu.isActive, this.visibleMine, this.BarMenu.visible] = [true, false, true, false];
        },
        additionally: function(event)
        {
            [this.isActive, this.BarMenu.isActive, this.visibleMine, this.BarMenu.visible] = [false, true, false, true];
        },
        openMatrix: function(event)
        {
            let n = 6, m = 6;
            let summ = 0;
            for (let i = 0; i < m; i++)
            {
                this.mas[i] = [];
                this.vizualMas[i] = [];
                if(i != 0)
                {
                    for (let j = 0; j == 0; j++)
                    {
                        if(this.mas[i][j] == this.mas[i][0])
                        {
                            this.mas[i][j] = summ++;
                            this.vizualMas[i][j] = '&#11015';
                        }   
                    }
                } 
            }
            
            for(let i = 5; i >= 2; i--)
            {
                this.mas[i][1] = summ++;
                this.vizualMas[i][1] = '&#11014';
            }

            for (let i = 3; i < m; i++)
            {
                this.mas[i][2] = summ++;
                this.vizualMas[i][2] = '&#11015';
            }

            for(let i = 5; i >= 4; i--)
            {
                this.mas[i][3] = summ++;
                this.vizualMas[i][3] = '&#11014';
            }

            for(let i = 4; i <= 4; i++)
            {
                this.mas[5][i] = summ++;
                this.vizualMas[5][i] = '&#11015';
            }

            for(let i = 5; i >= 0; i--)
            {
                for(let j = 5; j >= 0; j--)
                {
                    if(i === j)
                    {
                        this.mas[i][j] = summ++;
                        this.vizualMas[i][j] = '&#8598';
                    }
                }
            }

            for(let i = 0; i < m; i++)
            {
                for(let j = 1; j < n; j++)
                {
                    if(i+1 === j)
                    {
                        this.mas[i][j] = summ++;
                        this.vizualMas[i][j] = '&#8600';
                    }
                }
            }

            for(let i = 5; i >= 0; i--)
            {
                for(let j = 5; j >= 0; j--)
                {
                    if(i+2 === j)
                    {
                        this.mas[i][j] = summ++;
                        this.vizualMas[i][j] = '&#8598';
                    }
                }
            }

            for(let i = 0; i < m; i++)
            {
                for(let j = 1; j < n; j++)
                {
                    if(i+3 === j)
                    {
                        this.mas[i][j] = summ++;
                        this.vizualMas[i][j] = '&#8600';
                    }
                }
            }

            for(let i = 5; i >= 0; i--)
            {
                for(let j = 5; j >= 0; j--)
                {
                    if(i+4 === j)
                    {
                        this.mas[i][j] = summ++;
                        this.vizualMas[i][j] = '&#8598';
                    }
                }
            }

            for(let i = 0; i < m; i++)
            {
                for(let j = 1; j < n; j++)
                {
                    if(i+5 === j)
                    {
                        this.mas[i][j] = summ++;
                        this.vizualMas[i][j] = '&#8600';
                    }
                }
            }
            
            $("#valueMasiv").empty();
            $("#vizualMasiv").empty();

            for(let i in this.mas)
            {
                $("#valueMasiv").append(`<tr id="tr_valueMasiv_${i}"></tr>`);
                for(let x in this.mas[i])
                {
                   $("#tr_valueMasiv_"+i).append(`<td>${this.mas[i][x]}</td>`);
                }
            }

            for(let i in this.vizualMas)
            {
                $("#vizualMasiv").append(`<tr id="tr_vizualMasiv_${i}"></tr>`);
                for(let x in this.vizualMas[i])
                {
                   $("#tr_vizualMasiv_"+i).append(`<td>${this.vizualMas[i][x]}</td>`);
                }
            }

            console.log(this.vizualMas);
        },
    }
});
