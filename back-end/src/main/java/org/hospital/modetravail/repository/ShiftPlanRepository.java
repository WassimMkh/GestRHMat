package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.ModeTravail;
import org.hospital.modetravail.entities.ShiftPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShiftPlanRepository extends JpaRepository<ShiftPlan,Long> {
}
