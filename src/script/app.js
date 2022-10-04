var app = new Vue({
    el: '#app',
    data: {
        Title:
        {
            name: 'Введите ФИО',
            colBaggage: 'Введите кол. багажа',
            weightBaggage: 'Введите общий вес багажа',
        },
        Message:
        {
            name: '',
            colBaggage: '',
            weightBaggage: '',
        },
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

        MasivData:[],
        Error:'',
        isActive: true,
        visible: false,
    },
    methods: {
        setNameMessage: function(event)
        {
            this.Message.name = event.target.value;
        },
        setColBaggageMessage: function(event)
        {
            this.Message.colBaggage = event.target.value;
        },
        setWeightMessage: function(event)
        {
            this.Message.weightBaggage = event.target.value;
        },
        save: function(event)
        {
            if(this.Message.name === '')
            {
                this.Error = 'Пожалуйста, заполните поле'
            }
            else 
                if (this.Message.weightBaggage < 30)
                {
                    this.Error = 'Меньше 30'
                }
                else
                {
                    this.visible = true;
                    this.MasivData.push(this.Message);
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
    }
});
