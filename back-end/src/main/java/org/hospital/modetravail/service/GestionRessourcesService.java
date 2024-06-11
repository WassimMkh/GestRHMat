package org.hospital.modetravail.service;

import org.hospital.modetravail.entities.Employe;
import org.hospital.modetravail.entities.Equipe;
import org.hospital.modetravail.entities.MainTheorique;
import org.hospital.modetravail.entities.Trafic;

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
    public void incrementShiftPlan(String periode, Date dateDebut, Date datefin, Long modeTravailId, String shift, Long equipeIds);
    public void incrementMainTheorique(String nom,Long typeTraficIds, List<Long> traficIds,List<Long> equipementFamilleIds, List<Long> equipementIds, List<Long> accessoireIds);
    public void incrementNormeProductivite(Long traficId, Long mainTheoriqueId,
                                           Long modeId,
                                           int norme,boolean export,
                                           boolean imprt,String suiviProduit);
    public List<Employe> getEmployesByFonction(String fonction);
    public List<MainTheorique> getMainTheorique();
    public List<Trafic> getTraficByIdMain(Long Id);
    public List<Equipe> getEquipe();

    }
