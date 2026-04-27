const getDogBtn = document.getElementById('dog-btn')
const dogImg = document.getElementById('image')

const dogName = document.getElementById('dog-name')

const breed = document.getElementById('breed')
const bredFor = document.getElementById('bred-for-text')
const lifeSpan = document.getElementById('life-span')
const temperement = document.getElementById('temperament')
const height = document.getElementById('height')
const weight = document.getElementById('weight')

async function getDogDetails() {
    const res = await axios.get("https://api.freeapi.app/api/v1/public/dogs/dog/random")
    const data = res.data.data
    console.log(data);
    
    dogImg.src = data.image.url
    dogName.innerText = data.name || 'NA'
    breed.innerText = data.breed_group || 'NA'
    bredFor.innerText = data.bred_for || 'NA'
    lifeSpan.innerText = data.life_span || 'NA'
    temperement.innerText = data.temperament || 'NA'
    height.innerText = data.height.metric || 'NA'
    weight.innerText = data.weight.metric || 'NA'

    
    getDogBtn.addEventListener('click', getDogDetails)

}

getDogDetails()
    