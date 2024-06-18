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
    private String sens;
    private String suiviProduit;
    @ManyToOne
    private Mode mode;
    private int norme;
    @ManyToOne
    private MainTheorique mainTheorique;
    @ManyToOne
    private Trafic trafic;

}