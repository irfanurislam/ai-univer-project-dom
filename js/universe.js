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
                      <li class="text-secondary"></li>
                      <li class="text-secondary"></li>
                  <li class="text-secondary"></li>
                        </ol>
                      </div>
                      <hr class="px-2">
                      <div class="card-footer border-0 bg-body">
                       <div class="d-flex justify-content-between align-items-center">
                          <div>
                              <h4></h4>
                             <div class = "d-flex gap-3 align-items-center mt-2">
                             
                              <p></p>
                             </div>
                          </div>
                          
                       </div>
                      </div>
                    </div>
  
  
  
      `;
      aicontainer.appendChild(div);
    });
  
  
  }