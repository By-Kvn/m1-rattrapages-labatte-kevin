// Chargement du modèle Toxicity
let toxicityModel = null;
const toxicityThreshold = 0.8; // seuil de confiance

toxicity.load(toxicityThreshold).then(model => {
	toxicityModel = model;
	console.log("Modèle Toxicity chargé.");
}).catch(err => {
	console.error("Erreur de chargement du modèle Toxicity:", err);
});


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
	result.textContent = `Analyse Toxicity en cours...`;
		// Analyse Toxicity (asynchrone)
		if (toxicityModel) {
			toxicityModel.classify([text]).then(predictions => {
				let tags = [];
				predictions.forEach(pred => {
					if (pred.results[0].match) {
						tags.push(pred.label);
					}
				});
				if (tags.length > 0) {
					// Suggestions personnalisées selon le tag
					let advice = "";
					let icons = {
						insult: "🚫",
						threat: "⚠️",
						toxicity: "☠️",
						severe_toxicity: "🔥",
						identity_attack: "👤",
						sexual_explicit: "🔞",
						obscene: "🤬"
					};
					if (tags.includes("insult")) advice += "Essayez d'utiliser un langage plus respectueux. ";
					if (tags.includes("threat")) advice += "Les menaces ne sont pas tolérées. ";
					if (tags.includes("toxicity")) advice += "Attention à la toxicité dans vos propos. ";
					if (tags.includes("severe_toxicity")) advice += "Ce message est très toxique, veuillez le reformuler. ";
					if (tags.includes("identity_attack")) advice += "Respectez l'identité des autres. ";
					if (tags.includes("sexual_explicit")) advice += "Le contenu explicite n'est pas approprié ici. ";
					if (tags.includes("obscene")) advice += "Le langage obscène n'est pas autorisé. ";
					// Affichage visuel amélioré avec classes CSS
					result.innerHTML = `
						<div class="result-toxic">
							<div class="toxic-tags">
								${tags.map(t=>`<span class="toxic-tag">${icons[t]||"❗"} ${t.replace(/_/g,' ')}</span>`).join(' ')}
							</div>
							<div class="toxic-title">Toxicité détectée !</div>
							<div class="toxic-advice">${advice}</div>
						</div>
					`;
				} else {
					result.innerHTML = `
						<div class="result-safe">
							<span class="safe-message">✅ Aucune toxicité détectée.</span>
						</div>
					`;
				}
			}).catch(err => {
				console.error("Erreur d'analyse Toxicity:", err);
				result.innerHTML = `
					<div class="result-toxic">
						<div class="toxic-title">Erreur d'analyse</div>
						<div class="toxic-advice">Une erreur s'est produite lors de l'analyse. Veuillez réessayer.</div>
					</div>
				`;
			});
		} else {
			result.innerHTML = `
				<div class="result-toxic">
					<div class="toxic-title">Modèle non chargé</div>
					<div class="toxic-advice">Le modèle d'analyse n'est pas encore chargé. Veuillez patienter et réessayer.</div>
				</div>
			`;
		}
	});
});
