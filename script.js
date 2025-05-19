<script>
  document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
      toggle.addEventListener("click", function () {
        const sublist = this.nextElementSibling;
        if (sublist && sublist.tagName === "UL") {
          sublist.classList.toggle("hidden");
          this.classList.toggle("expanded");
        }
      });
    });
  });
</script>
