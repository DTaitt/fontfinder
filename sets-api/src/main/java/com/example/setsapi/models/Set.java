package com.example.setsapi.models;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "sets")
public class Set {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "favoriteId")
    private String favoriteId;

    @Column(name = "set_name")
    private String setName;


    public Set(String favoriteId, String setName) {
        this.setName = setName;
        this.favoriteId = favoriteId;
        this.setName = setName;
    }

    public String getFavoriteId() {
        return favoriteId;
    }

    public String getSetName() {
        return setName;
    }

    public void setFavoriteId(String favoriteId) {
        this.favoriteId = favoriteId;
    }

    public void setSetName(String setName) {
        this.setName = setName;
    }
}
