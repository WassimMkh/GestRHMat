package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Trafic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TraficRepository extends JpaRepository<Trafic, Long> {
    @Query("SELECT t FROM Trafic t JOIN t.mainTheorique mt WHERE mt.nom = ?1")
    List<Trafic> findAllByMainName(String mainNom);

    List<Trafic> findByTypeTrafic_Id(Long id);
}
