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
@Table(name = "Favorite")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fontfamily")
    private String fontfamily;

    @Column(name = "typeface")
    private String typeface;

    public Favorite(String fontfamily, String typeface) {
        this.fontfamily = fontfamily;
        this.typeface = typeface;
    }

    public String getFontFamily() {
        return fontfamily;
    }

    public String getTypeFace() {
        return typeface;
    }

    public void setFontFamily(String fontfamily) {
        this.fontfamily = fontfamily;
    }

    public void setTypeFace(String typeface) {
        this.typeface = typeface;
    }
}
