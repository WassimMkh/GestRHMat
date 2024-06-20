package org.hospital.modetravail.requests;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NormeProductiviteRequest {
    private Long id;
    private Long traficId;
    private Long mainTheoriqueId;
    private Long modeId;
    private int norme;
    private String sens;
    private String suiviProduit;

}

