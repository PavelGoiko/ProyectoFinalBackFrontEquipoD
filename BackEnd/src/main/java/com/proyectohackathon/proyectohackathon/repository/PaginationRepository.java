package com.proyectohackathon.proyectohackathon.repository;

import com.proyectohackathon.proyectohackathon.domain.Sales;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PaginationRepository extends PagingAndSortingRepository<Sales, String> {
}
