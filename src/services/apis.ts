export async function api_catas() {
    try {
        const data = await fetch('https://catfact.ninja/fact').then(res => res.json())
        console.log(data.fact);
        return data.fact
    } catch (error) {
      console.log(error)  
    }
}

export async function img_catas() {
    try {
        const data_img = await fetch('https://cataas.com/cat/says/')
        .then(res => res.json())
        return data_img
    } catch (error) {
      console.log(error)  
    }
}

