package com.capgemini.vliegveldassignment.vliegveldassignment.model;


import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Airplane extends Base {

    private int fuel;
    private boolean isLoadingFuel;
    private boolean isFlying;

    private Airplane(int id, String name, int fuel, boolean isFlying, boolean isLoadingFuel){
        super(id, name);
        this.fuel = fuel;
        this.isLoadingFuel = isLoadingFuel;
        this.isFlying = isFlying;
    }

    private Airplane(){}

    public int getFuel() {
        return fuel;
    }

    public void setFuel(int fuel) {
        this.fuel = fuel;
    }

    public boolean isLoadingFuel() {
        return isLoadingFuel;
    }

    public void setLoadingFuel(boolean loadingFuel) {
        isLoadingFuel = loadingFuel;
    }

    public boolean isFlying() {
        return isFlying;
    }

    public void setFlying(boolean flying) {
        isFlying = flying;
    }
}
