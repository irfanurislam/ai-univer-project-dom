const loaduser = async () => {
    try {
      const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
      const data = await res.json();
      console.log(data.data.tools);
      displayai(data.data.tools.slice(0, 6));
    }
    catch (error) {
      console.log(error);
    }
  
  }
  loaduser();

  const displayai = (data) => {
    console.log(data);
    const aicontainer = document.getElementById('ai_contain');
    aicontainer.innerHTML = "";
  
    
    //array loop single card value get
    data.forEach(card => {
      console.log(card);
    
      const { id, image, name, features, published_in } = card;
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
  
    <div class="card h-100 p-3">
                    <img src="${image}" class="card-img-top rounded-2" alt="...">
                    <div class="card-body">
                      <h5 class="card-title fw-bold p-0">Feature</h5>
                      <ol type="1" class="card-text p-2" id="featuresItem">
                      <li class="text-secondary">${features[0]}</li>
                      <li class="text-secondary">${features[1]}</li>
                  <li class="text-secondary">${features[2] ? features[2] : "more skills have"}</li>
                        </ol>
                      </div>
                      <hr class="px-2">
                      <div class="card-footer border-0 bg-body">
                       <div class="d-flex justify-content-between align-items-center">
                          <div>
                              <h4>${name}</h4>
                             <div class = "d-flex gap-3 align-items-center mt-2">
                              <p> <i class="fa fa-calendar"></i></p>
                              <p>${published_in}</p>
                             </div>
                          </div>
                          <div>
                              <i class="text-danger fas fa-arrow-right" onclick="loadaiinfo('${id}')"  data-bs-toggle="modal" data-bs-target="#aiinfodetails"></i>
                          </div>
                       </div>
                      </div>
                    </div>
  
  
  
      `;
      aicontainer.appendChild(div);
    });
  
  
  }

  const showAllDataTogether = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => {
        /* const sorted = data.data.tools;
        sorted.sort((a,b) => new Date(a.published_in) - new Date(b.published_in)); */
        displayai(data.data.tools)
        document.getElementById('showdata').classList.add('d-none');
      });
  };