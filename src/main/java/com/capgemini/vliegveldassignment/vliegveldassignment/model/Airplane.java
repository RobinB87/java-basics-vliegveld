package com.capgemini.vliegveldassignment.vliegveldassignment.model;


import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Airplane extends Base {


    private boolean isFlying;
    private int fuel;
    private boolean isLoadingFuel;

    private Airplane(int id, String name, boolean isFlying, int fuel, boolean isLoadingFuel){
        super(id, name);
        this.isFlying = isFlying;
        this.fuel = fuel;
        this.isLoadingFuel = isLoadingFuel;
    }

    private Airplane(){}

    public boolean isFlying() {
        return isFlying;
    }

    public void setFlying(boolean flying) {
        isFlying = flying;
    }

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
}
