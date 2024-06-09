package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.EquipementFamille;
import org.hospital.modetravail.entities.TypeTrafic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipementFamilleRepository extends JpaRepository<EquipementFamille,Long> {
    EquipementFamille findByNom(String n);

}
