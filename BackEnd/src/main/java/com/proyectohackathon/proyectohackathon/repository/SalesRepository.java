package com.proyectohackathon.proyectohackathon.repository;

import com.proyectohackathon.proyectohackathon.domain.Sales;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRepository extends ReactiveMongoRepository<Sales, String> {

}
