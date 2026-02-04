export function passwordStrength(password: string): "Faible" | "Moyen" | "Fort" {
  let score = 0;

  // 1️⃣ Longueur ≥ 8 caractères
  if (password.length >= 8) score++;

  // 2️⃣ Contient au moins une majuscule
  if (/[A-Z]/.test(password)) score++;

  // 3️⃣ Contient au moins une minuscule
  if (/[a-z]/.test(password)) score++;

  // 4️⃣ Contient au moins un chiffre
  if (/[0-9]/.test(password)) score++;

  // 5️⃣ Contient au moins un caractère spécial
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // Évaluation qualitative
  if (score <= 2) return "Faible";
  if (score === 3 || score === 4) return "Moyen";
  return "Fort";
}