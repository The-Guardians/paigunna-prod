package com.paigunna.api.service;

import com.paigunna.api.domain.Transaction;
import com.paigunna.api.dto.TransactionDto;

import java.util.List;

/**
 * @author Arm
 */
public interface TransactionService {

    Transaction save(Transaction transaction);

    List<Transaction> search(TransactionDto transactionDto);

    Transaction getById(Long id);

    List<Transaction> getAll();

    List<Transaction> getByPassenger(Long id);
}
