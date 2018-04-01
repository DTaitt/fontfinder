package com.example.setsapi.models;

import lombok.*;

import javax.persistence.*;


@Data
//@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "set_names")
public class SetName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "set_name")
    private String setName;

    public SetName(String setName) {
        this.id = id;
        this.setName = setName;
    }


    public String getSetName() {
        return setName;
    }


    public void setSetName(String setName) {
        this.setName = setName;
    }

}
