package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Employe;
import org.hospital.modetravail.entities.ModeTravail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeRepository extends JpaRepository<Employe,Long> {
    @Query("SELECT s FROM Employe s WHERE s.fonction = ?1")
    List<Employe> findByFonction(String function);
    @Query("SELECT DISTINCT e.fonction FROM Employe e")
    List<String> findDistinctFonction();
}
