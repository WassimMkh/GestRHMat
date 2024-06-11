package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Employe;
import org.hospital.modetravail.entities.Equipement;
import org.hospital.modetravail.entities.EquipementFamille;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipementRepository extends JpaRepository<Equipement,Long> {
    public List<Equipement> findByEquipementFamille_Id(Long equipFId);
}
