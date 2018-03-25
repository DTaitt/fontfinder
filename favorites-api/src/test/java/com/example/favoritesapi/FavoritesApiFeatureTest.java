package com.example.favoritesapi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class FavoritesApiFeatureTest {
    @Autowired
    private FavoriteRepository favoriteRepository;

    @Before
    public void setUp() {
        favoriteRepository.deleteAll();
    }

    @After
    public void tearDown() {
        favoriteRepository.deleteAll();
    }
}