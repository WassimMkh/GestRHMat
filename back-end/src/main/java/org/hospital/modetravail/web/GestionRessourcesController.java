package org.hospital.modetravail.web;

import jakarta.persistence.EntityNotFoundException;
import org.hospital.modetravail.entities.*;
import org.hospital.modetravail.repository.ModeRepository;
import org.hospital.modetravail.requests.*;
import org.hospital.modetravail.service.GestionRessourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
    @GetMapping("/fonctions")
    public List<String> getFonctions() {
        return gestionRessourcesService.getFonctions();
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
    public ResponseEntity<NormeProductiviteRequest> incrementNormeProductivite(@RequestBody NormeProductiviteRequest normeProductiviteRequest) {
        Map<String, String> response = new HashMap<>();
        try {
            gestionRessourcesService.incrementNormeProductivite(normeProductiviteRequest.getTraficId(),
                    normeProductiviteRequest.getMainTheoriqueId(), normeProductiviteRequest.getModeId(),
                    normeProductiviteRequest.getNorme(),
                    normeProductiviteRequest.getSens(),
                    normeProductiviteRequest.getSuiviProduit());
            return ResponseEntity.ok(normeProductiviteRequest);
        } catch (EntityNotFoundException e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", "An error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }





    @GetMapping("/maintheorique/{mainId}")
    public List<Trafic> getTraficByMainId(@PathVariable("mainId") Long id) {
        return gestionRessourcesService.getTraficByMainId(id);
    }
    @GetMapping("/equipes")
    public List<Equipe> getEquipe(){
    return gestionRessourcesService.getEquipe();
    }
    @GetMapping("/maintheorique")
    public List<MainTheorique> getMainTheorique() {
        return gestionRessourcesService.getMainTheorique();
    }
    @GetMapping("/modes")
    public List<Mode> getMode() {
        return  gestionRessourcesService.getMode();
    }
    @GetMapping("/norme_productivite")
    public List<NormeProductivite> getNormeProductivite() {
        return gestionRessourcesService.getNormeProductivite();
    }
}
