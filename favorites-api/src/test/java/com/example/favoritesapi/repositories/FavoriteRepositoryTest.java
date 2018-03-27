package com.example.favoritesapi.repositories;

import com.example.favoritesapi.models.Favorite;
import com.google.common.collect.Iterables;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class FavoriteRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Before
    public void setUp() {
        Favorite firstFavorite = new Favorite(
                "some font family",
                "some typeface"
        );

        Favorite secondFavorite = new Favorite(
                "another font family",
                "another typeface"
        );

        entityManager.persist(firstFavorite);
        entityManager.persist(secondFavorite);
        entityManager.flush();
    }

    @Test
    public void findAll_returnsAllFavorites() {
        Iterable<Favorite> favoritesFromDb = favoriteRepository.findAll();

        assertThat(Iterables.size(favoritesFromDb), is(2));
    }

    @Test
    public void findAll_returnsFontFamily() {
        Iterable<Favorite> favoritesFromDb = favoriteRepository.findAll();

        String secondFavoritesFontFamily = Iterables.get(favoritesFromDb, 1).getFontFamily();

        assertThat(secondFavoritesFontFamily, is("another font family"));
    }

    @Test
    public void findAll_returnsTypeFace() {
        Iterable<Favorite> favoritesFromDb = favoriteRepository.findAll();

        String secondFavoritesTypeFace = Iterables.get(favoritesFromDb, 1).getTypeFace();

        assertThat(secondFavoritesTypeFace, is("another typeface"));
    }


}
