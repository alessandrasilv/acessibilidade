

// Define a saturação (100% é o padrão, acima disso aumenta)
// 200% vai duplicar a intensidade das cores
tela.style.filter = "saturate(200%)";

const slider = document.getElementById('sat-control');
const tela = document.getElementById("Tela");

slider.addEventListener('input', (event) => {
    const valor = event.target.value;
    tela.style.filter = `saturate(${valor}%)`;
});
