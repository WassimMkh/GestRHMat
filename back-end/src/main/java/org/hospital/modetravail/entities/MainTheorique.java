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
public class MainTheorique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @ManyToOne
    private TypeTrafic typeTrafic;
    @ManyToMany
    @JsonIgnore
    private Collection<Trafic> trafics;
    @OneToMany(mappedBy = "mainTheorique")
    @JsonIgnore
    private Collection<EquipementFamille> equipementFamilles;
    @OneToMany(mappedBy = "mainTheorique")
    @JsonIgnore
    private Collection<Equipement> equipements;
    @OneToMany(mappedBy = "mainTheorique")
    @JsonIgnore
    private Collection<Accessoir> accessoirs;
    @OneToMany(mappedBy = "mainTheorique")
    @JsonIgnore
    private Collection<NormeProductivite> normeProductivite;

}
