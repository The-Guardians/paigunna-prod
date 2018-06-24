package com.paigunna.api.resource;

import com.paigunna.api.repo.TransactionRepo;
import com.paigunna.api.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Arm
 */
@RestController
@RequestMapping("/api/transaction")
public class TransactionResource {

    @Autowired
    private TransactionRepo transactionRepo;

    @Autowired
    private TransactionService transactionService;
}
