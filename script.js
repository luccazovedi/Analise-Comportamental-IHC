document.addEventListener('DOMContentLoaded', function () {
  var currentStep = 0;
  var steps = document.getElementsByClassName('step');

  function showStep(stepIndex) {
    for (var i = 0; i < steps.length; i++) {
      steps[i].style.display = 'none';
    }
    steps[stepIndex].style.display = 'block';
  }

  function exibirPopup() {
    var popup = document.createElement('div');
    popup.className = 'popup alert alert-info mt-3';
    popup.textContent = 'Pop-up da Etapa ' + (currentStep + 1);
    document
      .getElementById('etapa' + (currentStep + 1))
      .appendChild(popup);

    setTimeout(function () {
      popup.style.display = 'none';
    }, 3000);
  }

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      exibirPopup();
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  }

  showStep(currentStep);

  window.nextStep = nextStep; 
  window.prevStep = prevStep; 
});