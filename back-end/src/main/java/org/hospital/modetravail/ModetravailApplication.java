package org.hospital.modetravail;

import org.hospital.modetravail.service.GestionRessourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ModetravailApplication implements CommandLineRunner {
    @Autowired
    private GestionRessourcesService gestionRessourcesService;

    public static void main(String[] args) {
        SpringApplication.run(ModetravailApplication.class, args);
    }
    public void run(String... args) throws Exception {
//       gestionRessourcesService.initTypeTrafics();
//      gestionRessourcesService.initTrafics();
//        gestionRessourcesService.initEmployes();
//     gestionRessourcesService.initEquipementFamilles();
//        gestionRessourcesService.initEquipemnts();
//       gestionRessourcesService.initAccessoirs();
//        gestionRessourcesService.initMode();
//        gestionRessourcesService.initPeriodShfit();


    }

}
