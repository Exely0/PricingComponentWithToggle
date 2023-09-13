const toggleButton = document.getElementById('toggle-button');
const slider = document.getElementById("slider");
const rond=document.getElementById("rond");
const annualy = document.getElementById("annualy");
const monthly = document.getElementById("monthly");

const basicMonthly = "$19.99";
const professionalMonthly = "$24.99";
const masterMonthly = "$39.99";
const basicAnnualy = "$199.99";
const professionalAnnualy = "$249.99";
const masterAnnualy = "$399.99";

const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");

toggleButton.addEventListener('change', function() {
  if (toggleButton.checked) {
    monthly.style.fontWeight = "800";
    annualy.style.fontWeight = "600";
    basic.textContent = basicMonthly;
    professional.textContent = professionalMonthly;
    master.textContent = masterMonthly;
    rond.style.transform = "translateX(26px)";
  } else {
    annualy.style.fontWeight = "800";
    monthly.style.fontWeight = "600";
    basic.textContent = basicAnnualy;
    professional.textContent = professionalAnnualy;
    master.textContent = masterAnnualy;
    rond.style.transform = "translateX(0px)"
  }
});
