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
					// Affichage visuel amélioré
					result.innerHTML = `
						<div style='background:#ffeaea;border:2px solid #d32f2f;padding:16px;border-radius:8px;'>
							<div style='margin-bottom:8px;'>
								${tags.map(t=>`<span style='display:inline-block;background:#d32f2f;color:#fff;padding:4px 10px;border-radius:12px;margin-right:6px;font-size:1rem;'>${icons[t]||"❗"} ${t.replace(/_/g,' ')}</span>`).join(' ')}
							</div>
							<div style='font-weight:bold;color:#d32f2f;margin-bottom:8px;'>Toxicité détectée !</div>
							<div style='color:#333;margin-bottom:8px;'>${advice}</div>
						</div>
					`;
				} else {
					result.innerHTML = `
						<div style='background:#eafbe7;border:2px solid #388e3c;padding:16px;border-radius:8px;'>
							<span style='color:#388e3c;font-weight:bold;font-size:1.1rem;'>✅ Aucune toxicité détectée.</span>
						</div>
					`;
				}
			}).catch(err => {
				result.textContent = `Langue détectée : ${language}\nErreur d'analyse Toxicity.`;
			});
		} else {
			result.textContent = `Langue détectée : ${language}\nModèle Toxicity non chargé.`;
		}
	});
});
