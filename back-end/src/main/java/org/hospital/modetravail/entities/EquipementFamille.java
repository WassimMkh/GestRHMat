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
public class EquipementFamille {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @ManyToOne
    @JsonIgnore
    private MainTheorique mainTheorique;
    @OneToMany(mappedBy = "equipementFamille")
    @JsonIgnore
    private Collection<Equipement> equipements;
    @OneToMany(mappedBy = "equipementFamille")
    @JsonIgnore
    private Collection<Accessoir> accessoirs;
}
