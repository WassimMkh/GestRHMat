package org.hospital.modetravail.requests;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.Date;
@Getter
@Setter
@ToString
public class ShiftPlanRequest {
    private String periode;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private Long modeTravailId;
    private String shift;
    private Long equipeId;
}
