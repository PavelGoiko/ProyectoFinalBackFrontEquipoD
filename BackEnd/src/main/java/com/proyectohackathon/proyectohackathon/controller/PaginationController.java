package com.proyectohackathon.proyectohackathon.controller;

import com.proyectohackathon.proyectohackathon.domain.Sales;
import com.proyectohackathon.proyectohackathon.repository.PaginationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import reactor.core.publisher.Mono;

public class PaginationController {
    @Autowired
    private PaginationRepository paginationRepository;

    @GetMapping
    private Mono<Page<Sales>> getAll(
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name = "size", defaultValue = "10") Integer size) {
        return Mono.just(paginationRepository.findAll(PageRequest.of(page,size)));

    }
}
