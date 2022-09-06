package com.warehouse_quote.warehousequoteapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException {

    public ResourceNotFoundException(String message){
        super();
    }
}
