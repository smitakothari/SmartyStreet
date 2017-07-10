package com.jlabs.projects.smartystreet.domain;

/**
 * Created by smita on 7/8/17.
 */
public class AddressSuggestion {
    private String text;
    private String street_line;
    private String city;
    private String state;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getStreet_line() {
        return street_line;
    }

    public void setStreet_line(String street_line) {
        this.street_line = street_line;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
