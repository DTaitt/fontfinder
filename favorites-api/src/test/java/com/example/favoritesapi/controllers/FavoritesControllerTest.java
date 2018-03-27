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
                "some font family",
                "some typeface"
        );

        Favorite secondFavorite = new Favorite(
                "another font family",
                "another typeface"
        );

        newFavorite = new Favorite(
                "new font family",
                "new typeface"
        );
        given(mockFavoriteRepository.save(newFavorite)).willReturn(newFavorite);

        updatedSecondFavorite = new Favorite(
                "updated font family",
                "updated typeface"
        );
        given(mockFavoriteRepository.save(updatedSecondFavorite)).willReturn(updatedSecondFavorite);

        Iterable<Favorite> mockFavorites =
                Stream.of(firstFavorite, secondFavorite).collect(Collectors.toList());

        given(mockFavoriteRepository.findAll()).willReturn(mockFavorites);
        given(mockFavoriteRepository.findOne(1L)).willReturn(firstFavorite);
        given(mockFavoriteRepository.findOne(4L)).willReturn(null);
        doAnswer(invocation -> {
            throw new EmptyResultDataAccessException("ERROR MESSAGE FROM MOCK!!!", 1234);
        }).when(mockFavoriteRepository).delete(4L);


    }

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

//    @Test
//    public void findAllFavorites_success_returnFontFamilyForEachFavorite() throws Exception {
//
//        this.mockMvc
//                .perform(get("/"))
//                .andExpect(jsonPath("$[0].fontfamily", is("some font family")));
//    }

    @Test
    public void findAllFavorites_success_returnTypeFaceForEachFavorite() throws Exception {

        this.mockMvc
                .perform(get("/"))
                .andExpect(jsonPath("$[0].typeFace", is("some typeface")));
    }


    @Test
    public void findFavoriteById_success_returnsStatusOK() throws Exception {

        this.mockMvc
                .perform(get("/1"))
                .andExpect(status().isOk());
    }

//    @Test
//    public void findFavoriteById_success_returnFontFamily() throws Exception {
//
//        this.mockMvc
//                .perform(get("/1"))
//                .andExpect(jsonPath("$.fontfamily", is("some font family")));
//    }

    @Test
    public void findFavoriteById_success_returnTypeFace() throws Exception {

        this.mockMvc
                .perform(get("/1"))
                .andExpect(jsonPath("$.typeFace", is("some typeface")));
    }

    @Test
    public void findFavoriteById_failure_favoriteNotFoundReturns404() throws Exception {

        this.mockMvc
                .perform(get("/4"))
                .andExpect(status().reason(containsString("Favorite with ID of 4 was not found!")));
    }

    @Test
    public void deleteFavoriteById_success_returnsStatusOk() throws Exception {

        this.mockMvc
                .perform(delete("/1"))
                .andExpect(status().isOk());
    }

    @Test
    public void deleteFavoriteById_success_deletesViaRepository() throws Exception {

        this.mockMvc.perform(delete("/1"));

        verify(mockFavoriteRepository, times(1)).delete(1L);
    }

    @Test
    public void deleteFavoriteById_failure_favoriteNotFoundReturns404() throws Exception {

        this.mockMvc
                .perform(delete("/4"))
                .andExpect(status().isNotFound());
    }

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

//    @Test
//    public void createFavorite_success_returnsFontFamily() throws Exception {
//
//        this.mockMvc
//                .perform(
//                        post("/")
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(jsonObjectMapper.writeValueAsString(newFavorite))
//                )
//                .andExpect(jsonPath("$.fontfamily", is("new font family")));
//    }

    @Test
    public void createFavorite_success_returnsTypeFace() throws Exception {

        this.mockMvc
                .perform(
                        post("/")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(newFavorite))
                )
                .andExpect(jsonPath("$.typeFace", is("new type face")));
    }

    @Test
    public void updateFavoriteById_success_returnsStatusOk() throws Exception {

        this.mockMvc
                .perform(
                        patch("/1")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(updatedSecondFavorite))
                )
                .andExpect(status().isOk());
    }

//    @Test
//    public void updateFavoriteById_success_returnsupdated typefaceFontFamily() throws Exception {
//
//        this.mockMvc
//                .perform(
//                        patch("/1")
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(jsonObjectMapper.writeValueAsString(updatedSecondFavorite))
//                )
//                .andExpect(jsonPath("$.fontfamily", is("updated font family")));
//    }

    @Test
    public void updateFavoriteById_success_returnsupdated typefaceTypeFace() throws Exception {

        this.mockMvc
                .perform(
                        patch("/1")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(updatedSecondFavorite))
                )
                .andExpect(jsonPath("$.typeFace", is("updated typeface")));
    }

    @Test
    public void updateFavoriteById_failure_favoriteNotFoundReturns404() throws Exception {

        this.mockMvc
                .perform(
                        patch("/4")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(updatedSecondFavorite))
                )
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateFavoriteById_failure_favoriteNotFoundReturnsNotFoundErrorMessage() throws Exception {

        this.mockMvc
                .perform(
                        patch("/4")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonObjectMapper.writeValueAsString(updatedSecondFavorite))
                )
                .andExpect(status().reason(containsString("Favorite with ID of 4 was not found!")));
    }




}

