export type CguAndPoliciesType = {
    title: string;
    description: string | null;
    items: string[] | null;
};

export const POLICY_AND_TERMS: CguAndPoliciesType[] = [
    {
        title: "1. Données que nous collectons",
        description: "Dans le cadre du fonctionnement de la plateforme, nous traitons les données suivantes :",
        items: [
            "Données d'identification : Votre adresse email et votre mot de passe haché (pour la sécurité).",
            "Données de profil : Nom, prénom, numéro de téléphone, adresse postale, description personnelle et photo de profil.",
            "Données de géolocalisation : Vos coordonnées GPS précises (latitude et longitude) afin de permettre la mise en relation de proximité entre clients et prestataires.",
            "Données de transaction et d'activité : Détails des prestations proposées, descriptions des besoins (demandes clients), budgets et historiques des avis.",
            "Communications : Le contenu de vos messages échangés via notre système de messagerie et l'organisation de vos conversations."
        ],
    },
    {
        title: "2. Utilisation de vos données",
        description: "Vos données sont traitées pour les finalités suivantes :",
        items: [
            "Fourniture du service : Création et gestion de votre compte selon votre rôle (Client, Prestataire, Entreprise ou Admin).",
            "Mise en relation : Affichage de vos services ou de vos demandes auprès des autres utilisateurs en fonction de la localisation requise.",
            "Confiance et Sécurité : Gestion du système d'avis pour garantir la transparence et la fiabilité des membres.",
            "Communication : Facilitation des échanges via la table Message et notifications liées à l'état de vos demandes (en cours, acceptée, terminée, etc.).",
        ],
    },
    {
        title: "3. Partage des données",
        description: "Certaines de vos données sont visibles par les autres utilisateurs :",
        items: [
            "Les informations de votre Profil (Nom, Description, Photo) et de vos Prestations sont publiques pour permettre la recherche.",
            "Votre Localisation GPS peut être partagée pour estimer la distance lors d'une demande de service.",
            "Vos Avis et notes sont visibles sur le profil des prestataires concernés.",
        ],
    },
    {
        title: "4. Conservation et Suppression",
        description: null,
        items: [
            "Durée : Vos données sont conservées tant que votre compte est actif.",
            "Suppression (Droit à l'oubli) : Si vous demandez la suppression de votre compte, nous appliquons une règle de \"suppression en cascade\" (on delete cascade) : la suppression de votre compte Utilisateur entraîne automatiquement la suppression technique de votre Profil, de vos Messages et de vos Prestations dans notre base de données.",
        ],
    },
    {
        title: "5. Sécurité",
        description: "Nous mettons en œuvre des mesures techniques strictes, notamment le hachage des mots de passe et l'utilisation d'index de base de données pour sécuriser et optimiser l'accès à vos informations personnelles.",
        items: null,
    }
];

export const CGUS: CguAndPoliciesType[] = [
    {
        title: "1. Services Proposés",
        description: "Mikandra est une plateforme de mise en relation permettant :",
        items: [
            "Aux Prestataires de publier des offres de services liées à un métier spécifique et de définir leurs tarifs.",
            "Aux Clients de publier des demandes de besoins, de consulter des offres et de contacter des prestataires.",
            "L'échange de messages via une messagerie interne et la publication d'avis après prestation.",
        ],
    },
    {
        title: "2. Inscription et Compte",
        description: null,
        items: [
            "Création de profil : L'accès aux services nécessite la création d'un compte (Email, Mot de passe). L'utilisateur s'engage à fournir des informations exactes (Nom, Prénom, Téléphone).",
            "Rôles : L'utilisateur peut être enregistré comme Client, Prestataire, Entreprise ou Admin. Chaque utilisateur est responsable de la confidentialité de ses identifiants.",
            "Géolocalisation : Pour faciliter la mise en relation, la plateforme utilise vos coordonnées GPS (Latitude/Longitude) conformément à votre profil ou à vos demandes spécifiques.",
        ],
    },
    {
        title: "3. Utilisation de la Plateforme",
        description: null,
        items: [
            "Demandes et Services : Les utilisateurs s'engagent à ne pas publier de contenus (descriptions, photos) illégaux ou trompeurs.",
            "Messagerie : Les échanges entre membres doivent rester courtois. Mikandra se réserve le droit de supprimer tout contenu signalés comme abusif.",
            "Système d'Avis : Les clients peuvent noter les prestataires (note de 1 à 5). Les avis doivent refléter une expérience réelle et rester objectifs. Un client ne peut noter un même prestataire qu'une seule fois par service.",
        ],
    },
    {
        title: "4. Données Personnelles (RGPD)",
        description: "Conformément à la structure de notre base de données :",
        items: [
            "Nous collectons et stockons : votre email, vos informations de profil, vos messages, votre historique de demandes et vos coordonnées GPS.",
            "Suppression : En cas de suppression de votre compte utilisateur, votre profil et vos données associées (Prestations, Demandes) seront supprimés ou anonymisés de notre base active.",
        ],
    },
    {
        title: "5. Responsabilité",
        description: null,
        items: [
            "Mikandra agit en tant qu'intermédiaire technique. Nous ne sommes pas partie aux contrats conclus entre les clients et les prestataires.",
            "La plateforme ne garantit pas la qualité des prestations réalisées par les utilisateurs, bien que le système d'avis aide à la transparence.",
        ],
    },
    {
        title: "6. Modification et Résiliation",
        description: "Mikandra se réserve le droit de suspendre ou de supprimer l'accès à tout utilisateur ne respectant pas les présentes CGU, notamment en cas de fraude ou de comportements inappropriés signalés.",
        items: null,
    },
];