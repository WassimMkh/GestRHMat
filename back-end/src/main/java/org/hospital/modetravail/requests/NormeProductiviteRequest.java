package org.hospital.modetravail.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NormeProductiviteRequest {
    private Long traficId;
    private Long mainTheoriqueId;
    private Long modeId;
    private int norme;
    private boolean export;
    private boolean imprt;
    private String suiviProduit;

}
