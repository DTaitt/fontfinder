package com.example.favoritesapi.controllers;


import com.example.favoritesapi.models.Favorite;
import com.example.favoritesapi.repositories.FavoriteRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;


import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;

import static org.mockito.BDDMockito.given;

@RunWith(SpringRunner.class)
@WebMvcTest(FavoritesController.class)
public class FavoritesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private Favorite newFavorite;

    private Favorite updatedSecondFavorite;


    @Autowired
    private ObjectMapper jsonObjectMapper;


    @MockBean
    private FavoriteRepository mockFavoriteRepository;

    @Before
    public void setUp() {
        Favorite firstFavorite = new Favorite(
                "my id",
                "a font",
                "a category",
                "a url"
        );

        Favorite secondFavorite = new Favorite(
                "another id",
                "another font",
                "another category",
                "another url"
        );

        newFavorite = new Favorite(
                "new id",
                "a new font",
                "a new category",
                "a new url"
        );
        given(mockFavoriteRepository.save(newFavorite)).willReturn(newFavorite);

        Iterable<Favorite> mockFavorites =
                Stream.of(firstFavorite, secondFavorite).collect(Collectors.toList());

        given(mockFavoriteRepository.findAll()).willReturn(mockFavorites);
        given(mockFavoriteRepository.findOne(firstFavorite.getId())).willReturn(firstFavorite);
        given(mockFavoriteRepository.findOne("doesn't exist")).willReturn(null);
        doAnswer(invocation -> {
            throw new EmptyResultDataAccessException("ERROR MESSAGE FROM MOCK!!!", 1234);
        }).when(mockFavoriteRepository).delete("doesn't exist");


    }


    // Get Happy Tests
    @Test
    public void findAllFavorites_success_returnsStatusOK() throws Exception {

        this.mockMvc
                .perform(get("/"))
                .andExpect(status().isOk());
    }

    @Test
    public void findAllFavorites_success_returnAllFavoritesAsJSON() throws Exception {

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    public void findAllFavorites_success_returnFamilyForEachFavorite() throws Exception {

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$[0].family", is("a font")));

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$[1].family", is("another font")));
    }

    @Test
    public void findAllFavorites_success_returnCategoryForEachFavorite() throws Exception {

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$[0].category", is("a category")));

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$[1].category", is("another category")));
    }

    @Test
    public void findAllFavorites_success_returnUrlForEachFavorite() throws Exception {

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$[0].url", is("a url")));

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$[1].url", is("another url")));
    }

    @Test
    public void findFavoriteById_success_returnsStatusOK() throws Exception {

        this.mockMvc
                .perform(get("/1"))
                .andExpect(status().isOk());
    }

    @Test
    public void findFavoriteById_success_returnFamily() throws Exception {

        this.mockMvc
                .perform(get("/1"))
                .andExpect(jsonPath("$.family", is("a font")));
    }

    @Test
    public void findFavoriteById_success_returnCategory() throws Exception {

        this.mockMvc
                .perform(get("/1"))
                .andExpect(jsonPath("$.category", is("a category")));
    }

    @Test
    public void findFavoriteById_success_returnUrl() throws Exception {

        this.mockMvc
                .perform(get("/1"))
                .andExpect(jsonPath("$.url", is("a url")));
    }

    // Get Unhappy Tests

    @Test
    public void findFavoriteById_failure_favoriteNotFoundReturns404() throws Exception {

        this.mockMvc
                .perform(get("/4"))
                .andExpect(status().reason(containsString("Favorite with ID of 4 was not found!")));
    }

    // Delete Happy Tests

    @Test
    public void deleteFavoriteById_success_returnsStatusOk() throws Exception {

        this.mockMvc
                .perform(delete("/1"))
                .andExpect(status().isOk());
    }

    @Test
    public void deleteFavoriteById_success_deletesViaRepository() throws Exception {

        this.mockMvc.perform(delete("/1"));

        verify(mockFavoriteRepository, times(1)).delete("my id");
    }

    // Delete Unhappy Tests

    @Test
    public void deleteFavoriteById_failure_favoriteNotFoundReturns404() throws Exception {

        this.mockMvc
                .perform(delete("/4"))
                .andExpect(status().isNotFound());
    }

    // Create Happy Tests

    @Test
    public void createFavorite_success_returnsStatusOk() throws Exception {

        this.mockMvc
                .perform(
                        post("/")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(newFavorite))
                )
                .andExpect(status().isOk());
    }

    @Test
    public void createFavorite_success_returnsFamily() throws Exception {

        this.mockMvc
                .perform(
                        post("/")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(newFavorite))
                )
                .andExpect(jsonPath("$.family", is("a new font")));
    }

    @Test
    public void createFavorite_success_returnsCategory() throws Exception {

        this.mockMvc
                .perform(
                        post("/")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(newFavorite))
                )
                .andExpect(jsonPath("$.category", is("a new category")));
    }

    @Test
    public void createFavorite_success_returnsUrl() throws Exception {

        this.mockMvc
                .perform(
                        post("/")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(newFavorite))
                )
                .andExpect(jsonPath("$.url", is("a new url")));
    }

}

