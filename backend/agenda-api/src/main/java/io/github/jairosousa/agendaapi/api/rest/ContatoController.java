package io.github.jairosousa.agendaapi.api.rest;

import io.github.jairosousa.agendaapi.model.entity.Contato;
import io.github.jairosousa.agendaapi.repository.ContatoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/contatos")
public class ContatoController {

    private final ContatoRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contato save(@RequestBody Contato contato) {
        return repository.save(contato);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping
    public List<Contato> list() {
        return repository.findAll();
    }

    @PatchMapping("{id}/favorito")
    public void favorite(@PathVariable Long id) {
        Optional<Contato> contato = repository.findById(id);

        contato.ifPresent(c -> {
            boolean favorito = c.getFavorito() == Boolean.TRUE;
            c.setFavorito(!favorito);
            repository.save(c);
        });
    }
}
