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
    @Column(name = "nom",unique = true,length = 32)
    private String nom;
    @ManyToOne
    private TypeTrafic typeTrafic;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Trafic trafics;
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