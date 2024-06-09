package org.hospital.modetravail.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity @Data @AllArgsConstructor @NoArgsConstructor
public class ShiftPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String periode;
    private Date dateDebut;
    private Date dateFin;
    private String shift;
    @OneToOne
    private Equipe equipe;
    @ManyToOne
    private ModeTravail modeTravail;

}
