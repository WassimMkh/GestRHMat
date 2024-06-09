package org.hospital.modetravail.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PeriodeShift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String normalShift1;
    private String normalShift2;
    private String normalShift3;

    private String ramadanShift1;
    private String ramadanShift2;
    private String ramadanShift3;

    private LocalDate ramadanStartDate;
    private LocalDate ramadanEndDate;
}

