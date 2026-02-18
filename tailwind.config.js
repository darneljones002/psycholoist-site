export default { 
     content: ["./index.html", "./src/**/*.{js,jsx}"],  
     theme: {    
        extend: {      
            fontFamily: {        
                sans: ["ui-sans-serif","system-ui","Segoe UI","Inter","Arial","sans-serif"],      
            },      
                colors: {        
                    brand: {          
                        ink: "#0B1B2B",          
                        sky: "#D7F0FF",          
                        mint: "#DFF7EC",          
                        peach: "#FFE6D6",          
                        lilac: "#EDE3FF",          
                        sun: "#FFEFA6",          
                        ocean: "#2B7BBB",        
                    },      
                },      
                boxShadow: { 
                    soft: "0 10px 30px rgba(11,27,43,.08)" },      
                    borderRadius: { 
                        xl2: "1.25rem" 
                    },    
                },  
            },  
            plugins: [],};

