package org.hospital.modetravail.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Trafic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    private TypeTrafic typeTrafic;
    @ManyToMany
    @JsonIgnore
    private Collection<MainTheorique> mainTheorique;
    @OneToMany
    @JsonIgnore
    private Collection<NormeProductivite> normeProductivite;



}