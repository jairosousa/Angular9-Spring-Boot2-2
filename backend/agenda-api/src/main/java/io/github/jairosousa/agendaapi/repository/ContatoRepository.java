package io.github.jairosousa.agendaapi.repository;

import io.github.jairosousa.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
}
