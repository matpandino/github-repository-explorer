package com.githubrepositoryexplorer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Service
public class RepositoriesSearchService {

    public ResponseEntity<String> listRepositories(String query, String page){
        RestTemplate restTemplate = new RestTemplate();

        try {
            String apiUrl
                    = "https://api.github.com/search/repositories?q=" + query + "&page=" + page;

           return new ResponseEntity<String>(restTemplate.getForEntity(apiUrl, String.class).getBody(), HttpStatus.OK);
        }
        catch(RestClientException e) {
            System.out.println("Error while trying to reach github api: \n\n" + e.toString());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    public ResponseEntity<String> showRepository(String id){
        RestTemplate restTemplate = new RestTemplate();

        try {
            String apiUrl
                    = "https://api.github.com/repositories/" + id;

           return new ResponseEntity<String>(restTemplate.getForEntity(apiUrl, String.class).getBody(), HttpStatus.OK);
        }
        catch(RestClientException e) {
            System.out.println("Error while trying to reach github api: \n\n");
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

    public ResponseEntity<String> listUserRepositories(String user){
        RestTemplate restTemplate = new RestTemplate();

        try {
            String apiUrl
                    = "https://api.github.com/users/" + user + "/repos";

            return new ResponseEntity<String>(restTemplate.getForEntity(apiUrl, String.class).getBody(), HttpStatus.OK);
        }
        catch(RestClientException e) {
            System.out.println("Error while trying to reach github api: \n\n" + e.toString());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

}
