package org.hospital.modetravail.entities;

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
    private Collection<Trafic> trafics;
    @OneToMany(mappedBy = "mainTheorique")
    private Collection<EquipementFamille> equipementFamilles;
    @OneToMany(mappedBy = "mainTheorique")
    private Collection<Equipement> equipements;
    @OneToMany(mappedBy = "mainTheorique")
    private Collection<Accessoir> accessoirs;
    @OneToMany(mappedBy = "mainTheorique")
    private Collection<NormeProductivite> normeProductivite;

}
