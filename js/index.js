const submitBtn = document.querySelector("button[type=submit]");
const nameInpt = document.querySelector("input[name=name]");
const priceInpt = document.querySelector("input[name=price]");

const showResponse = (id, name) => {
  const card = document.querySelector(".card");

  const msg = `O produto "${name}" foi registrado com o id #${id}.`

  card.innerText = msg;
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const url = "https://jsonplaceholder.typicode.com/posts"
  const product = JSON.stringify({
    name: nameInpt.value,
    price: priceInpt.value,
  })

  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: product
  });

  const parsedRes = await response.json();

  showResponse(parsedRes.id, parsedRes.name);
  
}

submitBtn.addEventListener('click', handleSubmit)