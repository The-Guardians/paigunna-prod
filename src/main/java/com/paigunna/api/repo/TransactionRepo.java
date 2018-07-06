package com.paigunna.api.repo;

import com.paigunna.api.domain.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

/**
 * @author Arm
 */
public interface TransactionRepo extends JpaRepository<Transaction, Long> , JpaSpecificationExecutor<Transaction> {

    List<Transaction> findByPassenger(Long passengerId) ;
}
