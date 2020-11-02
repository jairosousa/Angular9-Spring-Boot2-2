package io.jairosousa.clientes.service;

import io.jairosousa.clientes.model.entity.Usuario;
import io.jairosousa.clientes.model.repository.UsuarioRepository;
import io.jairosousa.clientes.exception.UsuarioCasdastradoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private UsuarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Login inexistente"));

        return User
                .builder()
                .username(usuario.getUsername())
                .password(usuario.getPassword())
                .roles("USER")
                .build();
    }

    public Usuario salvar(Usuario usuario) {
        boolean exists = repository.existsByUsername(usuario.getUsername());
        if (exists) {
            throw new UsuarioCasdastradoException(usuario.getUsername());
        }
        return repository.save(usuario);

    }
}
