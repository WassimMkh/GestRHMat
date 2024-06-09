package org.hospital.modetravail.web;

import org.hospital.modetravail.entities.Employe;
import org.hospital.modetravail.entities.NormeProductivite;
import org.hospital.modetravail.entities.ShiftPlan;
import org.hospital.modetravail.requests.*;
import org.hospital.modetravail.service.GestionRessourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin("*")
public class GestionRessourcesController {
    @Autowired
    private GestionRessourcesService gestionRessourcesService;
    @PostMapping("/increment-modetravail")
    public void incrementModeTravail(@RequestBody ModeTravailRequest modeTravailRequest) {
        gestionRessourcesService.incrementModeTravail(modeTravailRequest.getSemaine(),modeTravailRequest.getJour());
    }

    @PostMapping("/periode-Ramadan")
    public  void incrementPeriodeShift(@RequestParam String normalShift1, @RequestParam  String normalShift2,  @RequestParam  String normalShift3, @RequestParam  String ramadanShift1,  @RequestParam  String ramadanShift2, @RequestParam  String ramadanShift3, @RequestParam LocalDate ramadanStartDate,@RequestParam LocalDate ramadanEndDate) {
        gestionRessourcesService.incrementPeriodeShift(normalShift1,normalShift2,normalShift3,ramadanShift1,ramadanShift2,ramadanShift3,ramadanStartDate,ramadanEndDate);
    }
    @PostMapping("/cree-equipe")

    public  void incrementEquipe(@RequestBody EquipeRequest equipeRequest) {
        gestionRessourcesService.incrementEquipe(equipeRequest.getNom(), equipeRequest.getResponsable(), equipeRequest.getEmployeIds());
    }
    @GetMapping("/employes/by-fonction/{fonction}")
    public List<Employe> getEmployesByFonction(@PathVariable("fonction") String fonction) {
        return gestionRessourcesService.getEmployesByFonction(fonction);
    }
/*    @PostMapping("/cree-shiftPlan")

    public void incrementShiftPlan(@RequestBody ShiftPlanRequest shiftPlanRequest){
        gestionRessourcesService.incrementShiftPlan(
                shiftPlanRequest.getPeriode(),
                shiftPlanRequest.getDateDebut(),
               shiftPlanRequest.getDateFin(),
                shiftPlanRequest.getModeTravailId(),
                shiftPlanRequest.getShift(),
                shiftPlanRequest.getEquipeIds());
    }*/
@PostMapping("/cree-shiftPlan")
public ResponseEntity<String> createShiftPlan(@RequestBody ShiftPlanRequest shiftPlanRequest) {
    try {
        gestionRessourcesService.incrementShiftPlan(
                shiftPlanRequest.getPeriode(),
                shiftPlanRequest.getDateDebut(),
                shiftPlanRequest.getDateFin(),
                shiftPlanRequest.getModeTravailId(),
                shiftPlanRequest.getShift(),
                shiftPlanRequest.getEquipeIds()
        );
        return ResponseEntity.ok("Shift plan created successfully");
    } catch (Exception e) {
        e.printStackTrace(); // Log the exception
        return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
    }
}
    @PostMapping("/cree-maintheorique")
    public void incrementMainTheorique(@RequestBody MainTheoriqueRequest mainTheoriqueRequest){
        gestionRessourcesService.incrementMainTheorique(mainTheoriqueRequest.getNom(),mainTheoriqueRequest.getTypeTraficIds(),mainTheoriqueRequest.getTraficIds(),mainTheoriqueRequest.getEquipementFamilleIds(),mainTheoriqueRequest.getEquipementIds(),mainTheoriqueRequest.getAccessoireIds());

    }
    @PostMapping("/cree-normeproductivite")

    public void incrementNormeProductivite(@RequestBody NormeProductiviteRequest normeProductiviteRequest){
        gestionRessourcesService.incrementNormeProductivite(normeProductiviteRequest.getTraficId(),
                normeProductiviteRequest.getMainTheoriqueId(),normeProductiviteRequest.getModeId(),
                normeProductiviteRequest.getNorme(),
                normeProductiviteRequest.isExport(),
                normeProductiviteRequest.isImprt(),normeProductiviteRequest.getSuiviProduit()
                );
    }


}
