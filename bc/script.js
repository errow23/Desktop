const convertButton = document.getElementById("convert");
const euroselector = document.querySelector(".currency-select")

function convertValues() {
  const input = document.querySelector(".botao").value

  const valorreal = document.querySelector(".valorreal")
  const valordolar = document.querySelector(".valordolar")


  const dolartoday = 5.2
  const eurotoday = 6.2
  const libratoday = 6.48
  const btctoday = 62.8


  if (euroselector.value == "libra") {
    valordolar.innerHTML = new Intl.NumberFormat("en-uk", {
      style: "currency",
      currency: "GBP"

    }).format(input / libratoday)

  }

  if (euroselector.value == "bitcoin"){
    valordolar.innerHTML= new Intl.NumberFormat("pt-pt", {
      style: "currency",
      currency: "BTC"
    }).format(input/ btctoday)
  }


  if (euroselector.value == "dolar") {
    valordolar.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD"

    }).format(input / dolartoday)

  }

  if (euroselector.value == "euro") {
    valordolar.innerHTML = new Intl.NumberFormat("de-De", {
      style: "currency",
      currency: "EUR"

    }).format(input / eurotoday)

  }



  valorreal.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(input)

}

function eurochange() {
  const nomedolar = document.querySelector(".nomedolar")
  const imgdolar = document.querySelector("#image")

  if(euroselector.value == "libra"){
    nomedolar.innerHTML = "GBP libra"
    imgdolar.src= "./libra 1.png"
  }

  if (euroselector.value == "dolar") {
    nomedolar.innerHTML = "Dolar Americano"
    imgdolar.src = "./estados-unidos (1) 1.png"


  }

  if (euroselector.value == "euro") {
    nomedolar.innerHTML = "Euro"
    imgdolar.src = "./Design sem nome 3.png"
  }

  if(euroselector.value == "bitcoin"){
    nomedolar.innerHTML = "Bitcoin"
    imgdolar.src = "./bitcoin 1.png"
  }





}

euroselector.addEventListener("change", eurochange)

convertButton.addEventListener("click", convertValues);
