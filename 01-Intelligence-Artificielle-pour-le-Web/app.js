
// Liste de mots pour l'analyse de sentiment
const positiveWords = ["bien", "heureux", "super", "génial", "cool", "merci", "bravo", "content", "satisfait", "excellent", "parfait", "top", "réussi", "amour", "joie", "sympa"];
const negativeWords = ["nul", "triste", "déçu", "mauvais", "dommage", "problème", "raté", "fâché", "colère", "horrible", "pire", "fatigué", "stress", "peur", "détesté", "erreur"];

// Fonction d'analyse de sentiment
function analyzeSentiment(text) {
	let score = 0;
	const words = text.toLowerCase().split(/\W+/);
	words.forEach(word => {
		if (positiveWords.includes(word)) score++;
		if (negativeWords.includes(word)) score--;
	});
	if (score > 0) return "positif";
	if (score < 0) return "négatif";
	return "neutre";
}

// Gestion du formulaire
document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("ia-form");
	const input = document.getElementById("user-input");
	const result = document.getElementById("result");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const text = input.value.trim();
		if (!text) {
			result.textContent = "Veuillez entrer un texte.";
			return;
		}
		// Analyse du texte
		const sentiment = analyzeSentiment(text);
		let suggestion = "";
		if (sentiment === "positif") {
			suggestion = "😊 Votre texte semble positif ! Continuez comme ça.";
		} else if (sentiment === "négatif") {
			suggestion = "😕 Votre texte semble négatif. Besoin d'encouragement ? Courage !";
		} else {
			suggestion = "😐 Texte neutre. Essayez d'exprimer une émotion ou une idée !";
		}
		result.textContent = suggestion;
	});
});
