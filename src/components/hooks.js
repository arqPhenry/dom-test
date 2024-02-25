function createHighlights (data) {
  //Selecciono el container
  const highlightsContainer = document.getElementById("internal-links-section");

  // Itero sobre los datos y añado clases bootstrap
  data.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("internal-links-card", "col-md-3", "col-sm-6", "col-xsm-12");
    
  // Creo el contenido de la card
        cardElement.innerHTML = `
        <div>
            <h4 class="normal-title">${card.title}</h4>
            <p class="normal-text">${card.content}</p>
        </div>
        <div class="d-flex justify-content-between">
            <button class="icon-button"><svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="color:var(--geist-foreground);width:24px;height:24px"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></button>
            <button class="icon-button"><svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" style="color:var(--geist-foreground);width:24px;height:24px"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></button>
        </div>
        `;
    
  // Agrego la card al contenedor
        highlightsContainer.appendChild(cardElement);
      })
}


function createServices (data) {
  const servicesContainer = document.getElementById("services-section");
  data.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("services-section-card", "container");
    
        cardElement.innerHTML = `
        <div class="row align-items-center m-0">
          <div class="col-md-8 col-xsm-12 mb-2">
              <h4 class="medium-title">${card.title}</h4>
              <p class="normal-text">${card.content}</p>
              <button class="white-button">${card.button}</button>
          </div>
          <div class="col-md-4 col-xsm-12">
              <figure><img src="${card.image}" alt="service-img"></figure>
          </div>
        </div>
        `;
    
        servicesContainer.appendChild(cardElement);
      })
}


export { createHighlights, createServices };