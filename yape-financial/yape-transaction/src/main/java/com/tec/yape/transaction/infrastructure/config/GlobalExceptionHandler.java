package com.tec.yape.transaction.infrastructure.config;

import com.tec.yape.transaction.domain.exception.TransactionException;
import com.tec.yape.transaction.infrastructure.config.dto.ErrorDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = TransactionException.class)
    public ResponseEntity<ErrorDto> businessExceptionHandler(TransactionException ex) {
        ErrorDto error = ErrorDto.builder()
                .status(ex.getStatus())
                .code(ex.getCode()).message(ex.getMessage()).build();
        return new ResponseEntity<>(error, ex.getStatus());
    }
}
