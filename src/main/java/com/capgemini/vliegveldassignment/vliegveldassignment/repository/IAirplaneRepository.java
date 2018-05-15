package com.capgemini.vliegveldassignment.vliegveldassignment.repository;

import com.capgemini.vliegveldassignment.vliegveldassignment.model.Airplane;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAirplaneRepository extends CrudRepository<Airplane, Integer> {
}
