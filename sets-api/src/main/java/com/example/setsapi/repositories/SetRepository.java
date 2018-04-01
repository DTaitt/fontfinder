package com.example.setsapi.repositories;

import com.example.setsapi.models.Set;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public interface SetRepository extends CrudRepository<Set, Long> {

}