package com.tec.yape.transaction.domain.exception;

import lombok.Getter;

@Getter
public enum CommonErrorType {

    COMMON_ERROR_400_1("Error en el criterio de ordenación"),

    COMMON_ERROR_404_1("Registro no encontrado");

    private final String description;


    CommonErrorType(String description) {
        this.description = description;
    }
}
