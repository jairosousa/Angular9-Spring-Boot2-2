package io.jairosousa.clientes.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.GenerationType.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cliente {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column(nullable = false, length = 11)
    private String cpf;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(name = "data_cadastro")
    private LocalDate dataCadastro;

    @PrePersist
    public void prepersist() {
        setDataCadastro(LocalDate.now());
    }
}
