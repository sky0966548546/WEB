function reset() {
    try {
      document.createEvent("TouchEvent");
      document.body.style.display = "none";
      return true;
    } catch (e) {
      return false;
    }
  }
  