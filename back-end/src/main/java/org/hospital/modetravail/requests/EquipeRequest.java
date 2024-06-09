package org.hospital.modetravail.requests;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter @Setter
public class EquipeRequest {
    private String nom;
    private String responsable;
    private List<Long> employeIds;
}
