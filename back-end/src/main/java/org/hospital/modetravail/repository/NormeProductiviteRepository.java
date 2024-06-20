package org.hospital.modetravail.repository;

import jakarta.transaction.Transactional;
import org.hospital.modetravail.entities.MainTheorique;
import org.hospital.modetravail.entities.Mode;
import org.hospital.modetravail.entities.NormeProductivite;
import org.hospital.modetravail.entities.Trafic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NormeProductiviteRepository extends JpaRepository<NormeProductivite,Long> {
    @Query("SELECT t.name,mt.nom,mode.nom,np.sens,np.suiviProduit FROM  NormeProductivite np " +
            "INNER JOIN MainTheorique mt ON np.mainTheorique.id=mt.id " +
            "INNER JOIN Trafic t ON np.trafic.id = t.id " +
            "INNER JOIN  Mode mode ON np.mode.id = mode.id")
    List<NormeProductivite> findAllWithNames();
    @Modifying
    @Transactional
    @Query("UPDATE NormeProductivite np " +
            "SET np.norme = :norme," +
            "np.sens = :sens," +
            "np.suiviProduit = :suiviProduit," +
            "np.mainTheorique = :mainTheorique," +
            "np.trafic = :trafic," +
            "np.mode = :mode " +
            "WHERE np.id = :id")
    void updateNormeProductivite(@Param(value = "id") Long id,
                                 @Param(value = "norme") Integer norme,
                                 @Param(value = "sens") String sens,
                                 @Param(value = "suiviProduit") String suiviProduit,
                                 @Param(value = "mainTheorique") MainTheorique mainTheorique,
                                 @Param(value = "trafic") Trafic trafic,
                                 @Param(value = "mode") Mode mode);
}
