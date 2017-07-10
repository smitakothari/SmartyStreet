package com.jlabs.projects.smartystreet.service;

import com.jlabs.projects.smartystreet.domain.AddressSuggestion;
import org.springframework.stereotype.Service;

/**
 * Created by smita on 7/8/17.
 */
@Service
public class AddressSuggestionService {
    public AddressSuggestion getAddressSuggestion(String address){

        String url = "https://us-autocomplete.api.smartystreets.com/suggest?auth-id=YOUR+AUTH-ID+HERE&auth-token=YOUR-AUTH-TOKEN-HERE&prefix=123+mai";

        return null;
    }
}
