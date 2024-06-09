package org.hospital.modetravail.requests;

import lombok.Getter;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;
@Getter
public class ShiftPlanRequest {

    private String periode;
    private Date dateDebut;
    private Date dateFin;
    private Long modeTravailId;
    private String shift;
    private Long equipeIds;
}
