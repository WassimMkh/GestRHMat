package org.hospital.modetravail.service;

import org.hospital.modetravail.entities.*;
import org.hospital.modetravail.requests.ModeTravailRequest;
import org.hospital.modetravail.requests.NormeProductiviteRequest;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface GestionRessourcesService {
    public void initTypeTrafics();

    public void initTrafics();

    public void initEmployes();

    public void initEquipementFamilles();

    public void initEquipemnts();

    public void initAccessoirs();

    public void initMode();

    public void incrementModeTravail(String semaine, String jour);
    public  void incrementPeriodeShift(String normalShift1,  String normalShift2, String normalShift3,String ramadanShift1,String ramadanShift2, String ramadanShift3,LocalDate ramadanStartDate,LocalDate ramadanEndDate) ;
    public  void incrementEquipe(String nom, String responsable, List<Long> employeIds);
    public void incrementShiftPlan(String periode, LocalDate dateDebut, LocalDate datefin, Long modeTravailId, String shift, Long equipeId);
    public void incrementMainTheorique(String nom,Long typeTraficIds, Long traficIds,List<Long> equipementFamilleIds, List<Long> equipementIds, List<Long> accessoireIds);
    public void incrementNormeProductivite(Long traficId, Long mainTheoriqueId,
                                           Long modeId,
                                           int norme,String sens,String suiviProduit);
    public List<Employe> getEmployesByFonction(String fonction);
    public List<MainTheorique> getMainTheorique();
    public List<Trafic> getTraficByMainId(Long id);
    public List<Equipe> getEquipe();
    public List<String> getFonctions();
    public List<TypeTrafic>  getTypeTrafic();
    public List<Trafic> getTraficBYTypetrafic(Long id);
    public List<Mode> getMode();
    public List<Equipement> getEquipementByEquipementFamille(Long Id);
    public List<Accessoir> getAccessoirByEquipementFamille(Long Id);
    public List<NormeProductivite> getNormeProductivite();
    public void deleteNormeProductvite(Long normeProductiviteId);
    public void updateNormeProductvite(Long id,Long traficId,
                                       Long maintheoriqueId,
                                       Long modeId,
                                       int norme,
                                       String sens,
                                       String suiviProduit);
    public void initPeriodShfit();
    public PeriodeShift getPeriodeShifts();
    public void updatePeriodeShift(Long id,LocalDate ramadanStartDate, LocalDate ramadanEndDate);

    public List<ModeTravail> getModeTravail();

    public List<EquipementFamille> getEquipementFamille();

    public Boolean checkEquipeNom(String equipeNom);

    public void updateShiftPlan(Long id,
                                String periode,
                                LocalDate dateDebut,
                                LocalDate dateFin,
                                String shift,
                                Long equipeId,
                                Long modeTravailId
                                );

    public ShiftPlan checkShiftPlanExists(Long equipeId);
    public List<Employe> getEmployes();

    public void addEmploye(String fonction , String nom);
    public void updateEmploye(Long id, String fonction , String nom);
    public void deleteEmploye(Long id);

}