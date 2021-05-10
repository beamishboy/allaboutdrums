const panelsafrican = document.querySelectorAll('.panel-african')
const panelseuropean = document.querySelectorAll('.panel-european')
const panelsmiddleeastern = document.querySelectorAll('.panel-middle-eastern')
const panelsindian = document.querySelectorAll('.panel-indian')

panelsafrican.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panelsafrican)
        panel.classList.add('active')
    })
})

panelseuropean.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panelseuropean)
        panel.classList.add('active')
    })
})

panelsmiddleeastern.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panelsmiddleeastern)
        panel.classList.add('active')
    })
})

panelsindian.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panelsindian)
        panel.classList.add('active')
    })
})


function removeActiveClasses(panels) {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const subButton = document.querySelector("#submitBtn");
subButton.addEventListener("mouseenter", toTheBeat);
subButton.addEventListener("mouseleave", toTheBeat);

function toTheBeat(e) {
    const clickedBtn = e.target;
    const eventType = e.type;
    const spanClass = eventType === "mouseenter" ? "beatTextOpaque d-inline" : "beatTextTransparent d-inline";
    console.log(spanClass);
    const beatSpan = document.querySelector("#beatText");
    beatSpan.className = spanClass;
}

// Image preloading done through CSS; function written below not required
// function preloader() {
//     redImage = new Image();
//     redImage.src = "../img/background/ForPatterns/regions_bg_pattern_red.png";
// }
