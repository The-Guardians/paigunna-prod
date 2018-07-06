package com.paigunna.api.service.impl;

import com.paigunna.api.domain.Transaction;
import com.paigunna.api.repo.TransactionRepo;
import com.paigunna.api.dto.TransactionDto;
import com.paigunna.api.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Arm
 */
@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;

    @Override
    public List<Transaction> getAll() {
        return transactionRepo.findAll();
    }

    @Override
    public Transaction getById(Long id) {
        return transactionRepo.findById(id).orElse(null);
    }

    @Override
    public Transaction save(Transaction transaction) {
        return transactionRepo.save(transaction);
    }

    @Override
    public List<Transaction> getByPassenger(Long id) {
        return transactionRepo.findByPassenger(id);
    }

    @Override
    public List<Transaction> search(TransactionDto transactionDto) {
        return null;
    }
}
