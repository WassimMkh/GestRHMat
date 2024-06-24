package org.hospital.modetravail.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity @Data @AllArgsConstructor @NoArgsConstructor
public class ShiftPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String periode;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String shift;
    @OneToOne
    @JsonIgnore
    private Equipe equipe;
    @ManyToOne
    @JsonIgnore
    private ModeTravail modeTravail;

}