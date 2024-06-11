package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Trafic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TraficRepository extends JpaRepository<Trafic, Long> {
    @Query("SELECT trafic FROM MainTheorique trafic WHERE trafic.id=?1")
    List<Trafic> findAllByIdMain(Long Id);
}
