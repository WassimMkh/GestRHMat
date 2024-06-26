package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Equipe;
import org.hospital.modetravail.entities.ModeTravail;
import org.hospital.modetravail.entities.ShiftPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

public interface ShiftPlanRepository extends JpaRepository<ShiftPlan,Long> {

    @Modifying
    @Transactional
    @Query("update ShiftPlan sp set sp.dateDebut = :dateDebut, sp.dateFin = :dateFin, sp.equipe = :equipe, sp.modeTravail = :modeTravail, sp.periode = :periode, sp.shift = :shift where sp.id = :id")
    void updateShiftPlan(@Param("id") Long id,
                         @Param("periode") String periode,
                         @Param("dateDebut") LocalDate dateDebut,
                         @Param("dateFin") LocalDate dateFin,
                         @Param("shift") String shift,
                         @Param("equipe") Equipe equipe,
                         @Param("modeTravail") ModeTravail modeTravail);

    ShiftPlan findByEquipeId(Long equipe_id);

}
