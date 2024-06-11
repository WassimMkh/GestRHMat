package org.hospital.modetravail.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private MainTheorique mainTheorique;
    @ManyToOne
    @JsonIgnore
    private Trafic trafic;

}
