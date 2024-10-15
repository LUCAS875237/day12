function my_fetch(url) {
    fetch(url)
      .then(response => response.json())
      .then(console.log)
      .catch(console.error);
  }
  
  my_fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528");
  