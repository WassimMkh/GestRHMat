# 🌐 Application de Gestion des Ressources – Marsa Maroc

> 🎓 **Projet de Fin d’Études** réalisé au sein de **Marsa Maroc**

Cette application web permet de gérer et suivre efficacement les affectations **prévisionnelles et réelles** des ressources humaines et matérielles dans les ports de Marsa Maroc, selon les prestations (manutention, marine, logistique, location). Elle est conçue avec des technologies modernes et intègre un système d’authentification sécurisé basé sur **Keycloak**.

---

## 🛠️ Stack technique

- **Back-end** : Spring Boot (Java)
- **Front-end** : Angular
- **Authentification & Gestion des rôles** : Keycloak
- **Base de données** : PostgreSQL
- **Sécurité** : OAuth2 avec intégration Keycloak

---

## 🎯 Objectifs de l’application

- Planification prévisionnelle des affectations selon les **normes, l’organisation et les escales prévues**
- Suivi des **écarts** entre la planification théorique et la réalisation
- Affectations multi-opérations : **manutention, marine, logistique, location**
- Suivi des réalisations : absences, arrêts, tonnage, mouvements
- Interfaçage avec :
  - **Contrôle de gestion** (optimisation des affectations)
  - **Comptabilité analytique**
  - **Système de calcul des primes de rendement**

---

## 🧩 Modules principaux

1. **Paramétrage**
   - Modes de travail, shifts, équipes
   - Plans de roulement
   - Main théorique (ressources nécessaires par prestation)
   - Normes de productivité

2. **Exploitation**
   - Affectations prévisionnelles & réelles
   - Liaison commande ↔ escale
   - Suivi des absences, arrêts, tonnage
   - Validation & clôture des escales

3. **Administration**
   - Gestion des comptes & profils
   - Définition des droits par rôle
   - Authentification centralisée avec Keycloak

4. **Reporting**
   - Extraction de données (états, tableaux, fichiers Excel)

---

## 👥 Rôles des utilisateurs

- **Super Administrateur** : gestion globale
- **Administrateur de port** : gestion des profils et utilisateurs d’un port
- **Responsable prévision** : planification des affectations
- **Responsable réalisation** : enregistrement des réalisations
- **Responsable validation** : validation des affectations
- **Utilisateur consultation** : lecture seule des données

---

## ⚙️ Installation & Lancement

### 1. Cloner le projet

```bash
git clone https://github.com/WassimMkh/GestRHMat.git
cd marsa-gestion-ressources
