//Archivo para consumir la api

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'; meal:

//formato JSON (meal: [harina, huevos, sal..... ,[preparacion]], [], []} o {meal: null }
const mapMeal = (row) => {
    const ingredientes = [];
    for (let i=1; i<= 20; i++){
        const name = row['strIngrediente${i}'];
        const measure = row['strMeasure${i}'];
        if (name && name.trim() !== '') {
            ingredientes.push({name:name.trim(), measure: (measure || '').trim})
        }

    }

}