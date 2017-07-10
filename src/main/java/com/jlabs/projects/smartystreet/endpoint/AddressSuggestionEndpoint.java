package com.jlabs.projects.smartystreet.endpoint;

import com.jlabs.projects.smartystreet.domain.AddressSuggestion;
import com.jlabs.projects.smartystreet.service.AddressSuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

/**
 * Created by smita on 7/8/17.
 */

@RestController
public class AddressSuggestionEndpoint {

    @Autowired
    AddressSuggestionService addressSuggestionService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value="/address/{address}", produces = "application/json")
    public AddressSuggestion getAddress(@PathVariable String address){
        return addressSuggestionService.getAddressSuggestion(address);
    }
}
