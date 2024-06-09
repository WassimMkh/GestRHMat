package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.TypeTrafic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeTraficRepository extends JpaRepository<TypeTrafic, Long> {

    TypeTrafic findByType(String sacherieEtDivers);
}
