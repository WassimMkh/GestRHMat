package org.hospital.modetravail.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NormeProductivite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean export;
    private boolean imprt;
    private String suiviProduit;
    @OneToOne(mappedBy = "normeProductivite")
    private Mode mode;
    private int norme;
    @ManyToOne
    private MainTheorique mainTheorique;
    @ManyToOne
    private Trafic trafic;

}
