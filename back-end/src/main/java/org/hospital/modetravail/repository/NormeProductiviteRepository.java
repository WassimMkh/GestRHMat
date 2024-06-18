package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.NormeProductivite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NormeProductiviteRepository extends JpaRepository<NormeProductivite,Long> {
    @Query("SELECT t.name,mt.nom,mode.nom,np.sens,np.suiviProduit FROM  NormeProductivite np " +
            "INNER JOIN MainTheorique mt ON np.mainTheorique.id=mt.id " +
            "INNER JOIN Trafic t ON np.trafic.id = t.id " +
            "INNER JOIN  Mode mode ON np.mode.id = mode.id")
    List<NormeProductivite> findAllWithNames();
}
