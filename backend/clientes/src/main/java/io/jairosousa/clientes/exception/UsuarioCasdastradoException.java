package io.jairosousa.clientes.exception;

public class UsuarioCasdastradoException extends RuntimeException{

    public UsuarioCasdastradoException(String login) {
        super("Usuario já cadastrado para o login " + login);
    }
}
