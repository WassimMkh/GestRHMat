package org.hospital.modetravail.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Equipement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private int quantite;
    @ManyToOne
    private EquipementFamille equipementFamille;
    @ManyToOne(cascade = CascadeType.PERSIST)
    private MainTheorique mainTheorique;
}
