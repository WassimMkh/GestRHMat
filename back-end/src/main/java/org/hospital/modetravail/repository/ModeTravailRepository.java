package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.ModeTravail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ModeTravailRepository extends JpaRepository<ModeTravail,Long> {
    @Modifying
    @Query(
            value = "alter table mode_travail AUTO_INCREMENT=1",
            nativeQuery = true
    )
    void alterModeTravail();


    @Query("UPDATE ModeTravail mt SET mt.jour = :jour, mt.semaine = :semaine WHERE mt.id = 1")
    void updateModeTravail(@Param("jour") String jour , @Param("semaine") String semaine);
}
