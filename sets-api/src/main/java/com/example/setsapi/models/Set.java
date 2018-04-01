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
@Table(name = "sets")
public class Set {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "favorites_id")
    private String favoritesId;

    @Column(name = "set_names_id")
    private String setNamesId;

    public Set(String favoritesId, String setNamesId) {
        this.favoritesId = favoritesId;
        this.setNamesId = setNamesId;
    }

    public String getFavoriteId() {
        return favoritesId;
    }

    public String getSetNamesId() {
        return setNamesId;
    }


    public void setFavoriteId(String favoritesId) {
        this.favoritesId = favoritesId;
    }

    public void setSetNamesId(String setNamesId) {
        this.setNamesId = setNamesId;
    }
}
