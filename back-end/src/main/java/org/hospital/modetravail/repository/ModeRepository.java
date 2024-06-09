package org.hospital.modetravail.repository;

import org.hospital.modetravail.entities.Mode;
import org.hospital.modetravail.entities.ModeTravail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModeRepository extends JpaRepository<Mode,Long> {
}
