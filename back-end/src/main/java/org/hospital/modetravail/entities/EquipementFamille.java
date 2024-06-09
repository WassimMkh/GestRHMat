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
public class EquipementFamille {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @ManyToOne
    private MainTheorique mainTheorique;
    @OneToMany(mappedBy = "equipementFamille")
    private Collection<Equipement> equipements;
    @OneToMany(mappedBy = "equipementFamille")
    private Collection<Accessoir> accessoirs;
}
