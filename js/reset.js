function reset() {
    try {
      document.createEvent("TouchEvent");
      document.getElementById('true').style.display = "none";
      document.getElementById('error').style.display="block";
      document.body.style.backgroundColor="white";
      document.body.style.backgroundImage="url('')";
      document.body.style.color="black";
      document.body.style.fontSize="";
      return true;
    } catch (e) {
      return false;
    }
  }