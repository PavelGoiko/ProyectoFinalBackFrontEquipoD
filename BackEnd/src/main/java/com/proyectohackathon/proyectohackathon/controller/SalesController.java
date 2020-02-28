package com.proyectohackathon.proyectohackathon.controller;

import com.proyectohackathon.proyectohackathon.domain.Sales;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import com.proyectohackathon.proyectohackathon.repository.SalesRepository;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/sales")

public class SalesController {
    @Autowired
    private SalesRepository salesRepository;

    @GetMapping
    public Flux<Sales> getAll(){
        return this.salesRepository.findAll();
    }

    @PostMapping
    public Mono<ResponseEntity<Sales>> postOne(@Valid @RequestBody Sales sales){
        return this.salesRepository.save(sales).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<Sales>> getById(@PathVariable("id") String id){
        return this.salesRepository.findById(id).map(sales -> new ResponseEntity<Sales>(sales, HttpStatus.OK)).defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public Mono<Sales> putById(@Valid @RequestBody Sales sales, @PathVariable("id") String id){
        return salesRepository.findById(id).flatMap(ventaGuardada -> {
            ventaGuardada.region=sales.region;
            ventaGuardada.country=sales.country;
            ventaGuardada.item_type=sales.item_type;
            ventaGuardada.sales_channel=sales.sales_channel;
            ventaGuardada.order_priority=sales.order_priority;
            ventaGuardada.order_date=sales.order_date;
            ventaGuardada.order_id=sales.order_id;
            ventaGuardada.ship_date=sales.ship_date;
            ventaGuardada.units_sold=sales.units_sold;
            ventaGuardada.unit_price=sales.unit_price;
            ventaGuardada.unit_cost=sales.unit_cost;
            ventaGuardada.total_revenue=sales.total_revenue;
            ventaGuardada.total_cost=sales.total_cost;
            ventaGuardada.total_profit=sales.total_profit;
            return this.salesRepository.save(ventaGuardada);
        });
    }
    /*.map(ventaActualizada -> new ResponseEntity<>(ventaActualizada, HttpStatus.OK)).defaultIfEmpty(ResponseEntity.notFound().build())*/
    /* return this.salesRepository.findById(id).flatMap(ventaGuardada -> {
            ventaGuardada.region=sales.region;
            ventaGuardada.country=sales.country;
            ventaGuardada.item_type=sales.item_type;
            ventaGuardada.sales_channel=sales.sales_channel;
            ventaGuardada.order_priority=sales.order_priority;
            ventaGuardada.order_date=sales.order_date;
            ventaGuardada.order_id=sales.order_id;
            ventaGuardada.ship_date=sales.ship_date;
            ventaGuardada.units_sold=sales.units_sold;
            ventaGuardada.unit_price=sales.unit_price;
            ventaGuardada.unit_cost=sales.unit_cost;
            ventaGuardada.total_revenue=sales.total_revenue;
            ventaGuardada.total_cost=sales.total_cost;
            ventaGuardada.total_profit=sales.total_profit;
            return this.salesRepository.save(ventaGuardada);
        })*/

    /* ventaGuardada.setRegion(sales.getRegion());
            ventaGuardada.setCountry(sales.getCountry());
            ventaGuardada.setItem_type(sales.getItem_type());
            ventaGuardada.setSales_channel(sales.getSales_channel());
            ventaGuardada.setOrder_priority(sales.getOrder_priority());
            ventaGuardada.setOrder_date(sales.getOrder_date());
            ventaGuardada.setOrder_id(sales.getOrder_id());
            ventaGuardada.setShip_date(sales.getShip_date());
            ventaGuardada.setUnits_sold(sales.getUnits_sold());
            ventaGuardada.setUnit_price(sales.getUnit_price());
            ventaGuardada.setUnit_cost(sales.getUnit_cost());
            ventaGuardada.setTotal_revenue(sales.getTotal_revenue());
            ventaGuardada.setTotal_cost(sales.getTotal_cost());
            ventaGuardada.setTotal_profit(sales.getTotal_profit());*/

    @DeleteMapping("/{id}")
    public Mono<ResponseEntity<Sales>> deleteById(@PathVariable("id") String id){
        return this.salesRepository.findById(id).flatMap(sales -> salesRepository.delete(sales).then(Mono.just(new ResponseEntity<Sales>(sales, HttpStatus.OK)))).defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
