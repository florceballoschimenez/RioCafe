const { createApp } = Vue

	createApp({
		data() {
		 return {
			error: false,
			url: "https://www.themealdb.com/api/json/v1/1/random.php",
			datos: {}
		  };
		},
        methods:{
            fetchData(url){
                fetch(url)
					.then(response => response.json())
					.then(data => {
                        console.log(data)
                        this.datos=data.meals[0]
                        
                        
                        
                    });
        
            }

        },
        created(){
            this.fetchData(this.url)
        },



	
	}).mount('#app');