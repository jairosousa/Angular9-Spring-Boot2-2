package io.github.jairosousa.agendaapi;

import io.github.jairosousa.agendaapi.model.entity.Contato;
import io.github.jairosousa.agendaapi.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AgendaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgendaApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner (@Autowired ContatoRepository repository) {
		return args -> {
			Contato contato = new Contato();
			contato.setEmail("fulano@email.com");
			contato.setNome("Fulano");
			contato.setFavorito(false);

			repository.save(contato);
		};
	}

}
