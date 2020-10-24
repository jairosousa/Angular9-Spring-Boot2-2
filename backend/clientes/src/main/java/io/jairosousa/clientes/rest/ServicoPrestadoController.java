package io.jairosousa.clientes.rest;

import io.jairosousa.clientes.model.entity.Cliente;
import io.jairosousa.clientes.model.entity.ServicoPrestado;
import io.jairosousa.clientes.model.repository.ClienteRepository;
import io.jairosousa.clientes.model.repository.ServicoPrestadoRepository;
import io.jairosousa.clientes.rest.dto.ServicoPrestadoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/servicos-prestados")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class ServicoPrestadoController {

    @Autowired
    private final ClienteRepository clienteRepository;

    @Autowired
    private final ServicoPrestadoRepository servicoPrestadoRepository;

    @PostMapping
    public ServicoPrestado salvar(@RequestBody ServicoPrestadoDTO dto) {
        LocalDate date = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Cliente cliente = clienteRepository.findById(dto.getIdCliente())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente Inexistente"));

        ServicoPrestado servicoPrestado = new ServicoPrestado();
        servicoPrestado.setDescricao(dto.getDescricao());
        servicoPrestado.setData(date);
        servicoPrestado.setCliente(cliente);
        servicoPrestado.setValor();

    }
}
