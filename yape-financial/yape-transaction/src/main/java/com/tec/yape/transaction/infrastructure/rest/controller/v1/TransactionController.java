package com.tec.yape.transaction.infrastructure.rest.controller.v1;

import com.tec.yape.transaction.application.usecase.TransactionUseCase;
import com.tec.yape.transaction.infrastructure.rest.dto.request.TransactionRequestDto;
import com.tec.yape.transaction.infrastructure.rest.dto.response.TransactionResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springdoc.api.annotations.ParameterObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping(value = "/api/v1/transaction", produces = "application/json")
@CrossOrigin("*")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionUseCase transactionUseCase;


    @Operation(summary = "register a new transaction")
    @PostMapping
    public TransactionResponseDto registerTransaction(@RequestBody TransactionRequestDto transactionRequestDto) {
        return transactionUseCase.registerTransaction(transactionRequestDto);
    }

    @Operation(summary = "List transactions", description = "Method order: \"id,asc\"")
    @GetMapping("withPagination")
    public Page<TransactionResponseDto> findAllPageable(
            @ParameterObject Pageable pageable) {
        return transactionUseCase.findAllPageable(pageable);
    }

    @Operation(summary = "List transactions")
    @GetMapping()
    public List<TransactionResponseDto> findAll() {
        return transactionUseCase.findAll();
    }

    @Operation(summary = "Find transaction by ExternalId")
    @GetMapping("/{transactionExternalId}")
    public TransactionResponseDto findByExternalId(
            @PathVariable UUID transactionExternalId) {
        return transactionUseCase.findByExternalId(transactionExternalId);
    }

}
