package com.paigunna.api.repo;

import com.paigunna.api.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author Arm
 */
public interface TransactionRepo extends JpaRepository<Transaction, Long> {

    List<Transaction> findByPassenger(String passenger) ;
}
