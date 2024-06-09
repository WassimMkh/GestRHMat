package org.hospital.modetravail.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Entity @Data @AllArgsConstructor @NoArgsConstructor
public class ModeTravail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String semaine;
    private String jour;
    @OneToMany(mappedBy = "modeTravail")
    private Collection<ShiftPlan> shiftPlans;

}
