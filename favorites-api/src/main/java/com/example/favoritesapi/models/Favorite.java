package com.example.favoritesapi.models;

import lombok.*;

import javax.persistence.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Builder
@Table(name = "Favorites")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "family")
    private String family;

    @Column(name = "category")
    private String category;

    public Favorite(String family, String category) {
        this.family = family;
        this.category = category;
    }
}
