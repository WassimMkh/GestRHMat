package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Employe;
import org.hospital.modetravail.entities.Equipement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipementRepository extends JpaRepository<Equipement,Long> {
}
