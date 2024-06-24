package org.hospital.modetravail.requests;

import lombok.Getter;

import java.util.List;
@Getter
public class MainTheoriqueRequest {
    private String nom;
    private Long typeTraficIds;
    private Long traficIds;
    private List<Long> equipementFamilleIds;
    private List<Long> equipementIds;
    private List<Long> accessoireIds;
}
