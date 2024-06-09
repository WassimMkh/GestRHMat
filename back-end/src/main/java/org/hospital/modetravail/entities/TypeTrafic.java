package org.hospital.modetravail.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class TypeTrafic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    @OneToMany(mappedBy = "typeTrafic")
    private Collection<Trafic> trafics;
    @OneToMany(mappedBy = "typeTrafic")
    private Collection<MainTheorique> mainTheorique;
}
