package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Trafic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TraficRepository extends JpaRepository<Trafic, Long> {
    @Query("SELECT t FROM Trafic t JOIN t.mainTheorique mt WHERE mt.id = :id")
    List<Trafic> findAllByMainId(@Param("id") Long id);

    List<Trafic> findByTypeTrafic_Id(Long id);
    @Query("SELECT t FROM Trafic t WHERE t.id = :id")
    Trafic findByIdd(@Param("id") Long Id);
}
