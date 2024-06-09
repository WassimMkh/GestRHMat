package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Equipe;
import org.hospital.modetravail.entities.ModeTravail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipeRepository extends JpaRepository<Equipe,Long> {
}
