

function checkBloodPressure() {
  // Get the user input
  var systolicInput = document.getElementById("systolic");
  var diastolicInput = document.getElementById("diastolic");
  var systolic = parseFloat(systolicInput.value);
  var diastolic = parseFloat(diastolicInput.value);
  if (!systolic || !diastolic) return alert("Please Enter Systolic And Diastolic Pressure");
  // Calculate the mean arterial pressure (MAP)
  var map = (systolic + 2 * diastolic) / 3;

  // Determine the blood pressure category
  var result;
  if (map < 70) {
    result = "Low blood pressure (Hypotension)";
    precautions = "Make sure to stay hydrated, avoid standing up quickly, and consider consulting with a healthcare professional.";
  } else if (map >= 70 && map <= 100) {
    result = "Normal blood pressure";
    precautions = "Continue maintaining a healthy lifestyle with regular exercise and a balanced diet.";
  } else if (map > 100 && map <= 110) {
    result = "Prehypertension";
    precautions = "Start monitoring your blood pressure regularly and consider lifestyle changes such as reducing salt intake and increasing physical activity.";
  } else {
    result = "High blood pressure (Hypertension)";
    precautions = "Seek medical attention immediately and follow the advice of your healthcare provider.";
  }

  // Display the result in a pop-up
  var message = "Your blood pressure category is: " + result + "\n\nPrecautions:\n" + precautions;

  Swal.fire({
    title: "BP Reeding",
    text: message,
    icon: "success", // Can be 'success', 'error', 'warning', 'info', or 'question'
    confirmButtonText: "OK",
  });
  systolicInput.value = "";
  diastolicInput.value = "";
}



function checkBmi(){
  
  var weight = document.getElementById("weight");
  var height = document.getElementById("height");
  var w1 = parseFloat(weight.value);
  var h1 = parseFloat(height.value)/100;

  //console.log(weight);
 
  const bmi = w1 / (h1 * h1);
  const bmiCategory = getBMICategory(bmi);

  const suggestion = getSuggestion(bmiCategory);

if(bmiCategory=="Underweight")
{
  Swal.fire({
    title: `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`,
    text: suggestion,
    icon: "warning", // Can be 'success', 'error', 'warning', 'info', or 'question'
    confirmButtonText: "OK",
  });
}
else if(bmiCategory=="Normal weight")
{
  Swal.fire({
    title: `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`,
    text: suggestion,
    icon: "success", // Can be 'success', 'error', 'warning', 'info', or 'question'
    confirmButtonText: "OK",
  });
}
else if(bmiCategory=="Overweight")
{
  Swal.fire({
    title: `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`,
    text: suggestion,
    icon: "warning", // Can be 'success', 'error', 'warning', 'info', or 'question'
    confirmButtonText: "OK",
  });
}
else 
{
  Swal.fire({
    title: `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`,
    text: suggestion,
    icon: "info", // Can be 'success', 'error', 'warning', 'info', or 'question'
    confirmButtonText: "OK",
  });
}

weight.value="";
height.value="";
};

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

function getSuggestion(category) {
  switch (category) {
    case "Underweight":
      return "You may need to gain some weight to be healthy. Please consult a nutritionist or a healthcare provider.";
    case "Normal weight":
      return "Congratulations! You have a healthy weight. Keep up the good work!";
    case "Overweight":
      return "You may need to lose some weight to be healthy. Please consult a nutritionist or a healthcare provider.";
    case "Obesity":
      return "You are at high risk of weight-related health problems. Please consult a doctor for advice and support.";
    default:
      return "";
  }

}





function checksugar() {
  var sugarInput = document.getElementById("sugar");
  var sugar = parseFloat(sugarInput.value);
  if (!sugar) return Swal.fire("Enter the Field");
  console.log(sugar)

  //const sg=getsugarinfo(sugar);

  if(sugar<=70){
    
    Swal.fire({
      title: "Your blood sugar level is low.",
      text:"To avoid low blood sugar levels, aim for balanced meals and snacks throughout the day, including a mix of carbohydrates, protein, and healthy fats. Regular monitoring of blood sugar levels and adjusting insulin or medication doses as advised by a healthcare provider can help prevent hypoglycemia. Additionally, incorporating consistent physical activity into your routine can improve insulin sensitivity and help maintain stable blood sugar levels.",
      icon: "error", // Can be 'success', 'error', 'warning', 'info', or 'question'
      confirmButtonText: "OK",
    });
   }

 else if(sugar<=100 && sugar>=70){
  Swal.fire({
    text: "Your blood sugar level is normal.",
    icon: "success", // Can be 'success', 'error', 'warning', 'info', or 'question'
    confirmButtonText: "OK",
  });
 }

 else{
  Swal.fire({
    title: "Your blood sugar level is high",
    text:"To manage high blood sugar levels, limit intake of sugary foods and beverages, and focus on consuming complex carbohydrates, lean proteins, and fiber-rich foods. Regular physical activity and medication adherence, as prescribed by a healthcare provider, are also crucial in controlling blood sugar levels and preventing complications.",
    icon: "warning", // Can be 'success', 'error', 'warning', 'info', or 'question'
    confirmButtonText: "OK",
  });
 }

//  function getsugarinfo()
//  {
//   if(sugar<=100 && sugar>=70)
//   {
//     return "Normal"
//   }
//   else if(sugar>=101)
//   {
//     return "high"
//   }
//   else if(sugar<=69)
//   {
//     return "Low"
//   }
//  }

//  function infosugar(info)
//  {
// switch(info)
// {
//   case "Low":
//     return "Low Sugar";
//   case "Normal":
//   return "Normal Sugar"
//   case "high":
//     return "High Sugar"
// }
//  }
}

