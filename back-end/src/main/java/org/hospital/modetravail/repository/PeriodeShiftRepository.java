package org.hospital.modetravail.repository;

import jakarta.transaction.Transactional;
import org.hospital.modetravail.entities.ModeTravail;
import org.hospital.modetravail.entities.PeriodeShift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface PeriodeShiftRepository extends JpaRepository<PeriodeShift,Long> {
    @Modifying
    @Query(
            value = "alter table periode_shift AUTO_INCREMENT=1",
            nativeQuery = true
    )
    void alterPeriodShift();
    @Query("SELECT np FROM  PeriodeShift np")
    PeriodeShift getPeriodeShift();
    @Modifying
    @Transactional
    @Query("UPDATE PeriodeShift ps SET ps.ramadanStartDate = :ramadanStartDate, ps.ramadanEndDate = :ramadanEndDate WHERE ps.id = :id")
    void updateRamadanDates(@Param("id") Long id,
                            @Param("ramadanStartDate") LocalDate ramadanStartDate,
                            @Param("ramadanEndDate") LocalDate ramadanEndDate);
}
