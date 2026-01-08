// Sélection des éléments
const img = document.getElementById('image');
const fileInput = document.getElementById('imageUpload');

// Event listener pour l'upload d'image
fileInput.addEventListener('change', handleImageUpload);

// Écouter le chargement de l'image
img.addEventListener('load', classifyImg);

// Gestion de l'upload d'image
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      img.src = e.target.result;
      document.getElementById('imageContainer').style.display = 'block';
      document.getElementById('resultsCard').style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
}

function classifyImg() {
  console.log("Lancement de la classification...");
  
  ml5.imageClassifier('MobileNet')
    .then(classifier => {
      modelLoaded();
      return classifier;
    })
    .then(classifier => classifier.classify(img))
    .then(results => {
      console.log(results);
      displayPrediction(results);
    })
    .catch(error => {
      console.error("Erreur ml5:", error);
    });
}

function modelLoaded() {
  console.log('Model loaded!');
  document.getElementById('message').innerHTML = '<i class="bi bi-check-circle" style="font-size: 1.5rem; margin-right: 10px;"></i>Modèle chargé ! Vous pouvez maintenant uploader une image.';
  document.getElementById('message').style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  document.getElementById('message').style.color = 'white';
}

function displayPrediction(results){
  let label = results[0].label;
  let confidence = (results[0].confidence * 100).toFixed(2) + " %";

  document.getElementById('label').textContent = label;
  document.getElementById('confidence').textContent = confidence;
  document.getElementById('resultsCard').style.display = 'block';
}