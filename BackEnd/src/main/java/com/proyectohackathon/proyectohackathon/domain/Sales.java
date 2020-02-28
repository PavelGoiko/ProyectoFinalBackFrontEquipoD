package com.proyectohackathon.proyectohackathon.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "sales")
public class Sales {
    @Id
    public String id;
    @NotNull
    @NotBlank

    @Field("Region")
    public String region;

    @Field("Country")
    public String country;

    @Field("Item Type")
    public String item_type;

    @Field("Sales Channel")
    public String sales_channel;

    @Field("Order Priority")
    public String order_priority;

    @Field("Order Date")
    public String order_date;

    @Field("Order ID")
    public Integer order_id;

    @Field("Ship Date")
    public String ship_date;

    @Field("Units Sold")
    public Integer units_sold;

    @Field("Unit Price")
    public Double unit_price;

    @Field("Unit Cost")
    public Double unit_cost;

    @Field("Total Revenue")
    public Double total_revenue;

    @Field("Total Cost")
    public Double total_cost;

    @Field("Total Profit")
    public Double total_profit;

}
