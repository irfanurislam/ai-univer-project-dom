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