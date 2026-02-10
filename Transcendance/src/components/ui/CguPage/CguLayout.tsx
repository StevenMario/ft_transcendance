import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const SectionTitle = ({ className, children }: { className?: string, children: any }) => {
  return (
    <h1 className={`font-medium text-lg ${className}`}>
      {children}
    </h1>
  );
};

const ListItem = ({ className, children }: { className?: string, children: any }) => {
  return (
    <p className={`text-base text-left ${className}`}>
      - {children}
    </p>
  );
};

function CguLayout() {
  return (
    <section className="relative h-max overflow-hidden container mx-auto py-20 text-[#444]">
      <Link to="/" className="flex gap-x-2 justify-left items-end text-sm text-[#E64A22] hover:text-inherit transition-colors w-max mb-10">
        <ArrowLeft size={18} />
        Accueil
      </Link>
      <h1 className="font-medium text-xl pb-2">Conditions Générales d’Utilisation</h1>
      <p className="mb-5">
        <small>Date de dernière mise à jour: 10 février 2026</small><br /><br />
        Bienvenue sur Mikandra. La présente plateforme met en relation des prestataires de services et des clients. En créant un compte, vous acceptez sans réserve les présentes conditions.
      </p>
      {/* Services */}
      <SectionTitle className="mb-2">Services Proposés</SectionTitle>
      <div className="mb-5">
        Mikandra est une plateforme de mise en relation permettant :<br />
        <ListItem>Aux <i>Prestataires</i> de publier des offres de services liées à un métier spécifique et de définir leurs tarifs.</ListItem>
        <ListItem>Aux <i>Clients</i> de publier des demandes de besoins, de consulter des offres et de contacter des prestataires.</ListItem>
        <ListItem>L'échange de messages via une messagerie interne et la publication d'avis après prestation.</ListItem>
      </div>
      {/* Inscription */}
      <SectionTitle className="mb-2">Inscription et Compte</SectionTitle>
      <div className="mb-5">
        <ListItem><i>Création de profil:</i> L'accès aux services nécessite la création d'un compte (Email, Mot de passe). L'utilisateur s'engage à fournir des informations exactes (Nom, Prénom, Téléphone).</ListItem>
        <ListItem><i>Rôles:</i> L'utilisateur peut être enregistré comme Client, Prestataire, Entreprise ou Admin. Chaque utilisateur est responsable de la confidentialité de ses identifiants.</ListItem>
        <ListItem><i>Géolocalisation:</i> Pour faciliter la mise en relation, la plateforme utilise vos coordonnées GPS (Latitude/Longitude) conformément à votre profil ou à vos demandes spécifiques.</ListItem>
      </div>
      {/* Utilisation de la Plateforme */}
      <SectionTitle className="mb-2">Utilisation de la Plateforme</SectionTitle>
      <div className="mb-5">
        <ListItem><i>Demandes et Services:</i> Les utilisateurs s'engagent à ne pas publier de contenus (descriptions, photos) illégaux ou trompeurs.</ListItem>
        <ListItem><i>Messagerie:</i> Les échanges entre membres doivent rester courtois. Mikandra se réserve le droit de supprimer tout contenu signalés comme abusif.</ListItem>
        <ListItem><i>Système d'Avis:</i> Les clients peuvent noter les prestataires (note de 1 à 5). Les avis doivent refléter une expérience réelle et rester objectifs. Un client ne peut noter un même prestataire qu'une seule fois par service.</ListItem>
      </div>
      {/* Données Personnelles */}
      <SectionTitle className="mb-2">Données Personnelles(RGPD)</SectionTitle>
      <div className="mb-5">
        Conformément à la structure de notre base de données :<br />
        <ListItem>Nous collectons et stockons : votre email, vos informations de profil, vos messages, votre historique de demandes et vos coordonnées GPS.</ListItem>
        <ListItem><i>Suppression:</i> En cas de suppression de votre compte utilisateur, votre profil et vos données associées (Prestations, Demandes) seront supprimés ou anonymisés de notre base active.</ListItem>
      </div>
      {/* Responsabilité */}
      <SectionTitle className="mb-2">Responsabilité</SectionTitle>
      <div className="mb-5">
        <ListItem>Mikandra agit en tant qu'intermédiaire technique. Nous ne sommes pas partie aux contrats conclus entre les clients et les prestataires.</ListItem>
        <ListItem>La plateforme ne garantit pas la qualité des prestations réalisées par les utilisateurs, bien que le système d'avis aide à la transparence.</ListItem>
      </div>
      {/* Modification et Résiliation */}
      <SectionTitle className="mb-2">Modification et Résiliation</SectionTitle>
      <p className="mb-5">
        Mikandra se réserve le droit de suspendre ou de supprimer l'accès à tout utilisateur ne respectant pas les présentes CGU, notamment en cas de fraude ou de comportements inappropriés signalés.
      </p>
    </section>
  );
}

export default CguLayout;